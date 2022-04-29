import useSWR from 'swr'
import http from '../helpers/http'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { RegisterUser, RegisterUserErrors } from '../interfaces/registerUser';
import { LoginUserErrors } from '../interfaces/loginUser';

interface UseAuthArgs {
    middleware?: 'auth' | 'guest';
    redirectIfAuthenticated?: string;
}



export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthArgs = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR('/api/user', async () =>{
        try{
            const { data } = await http.get('/api/user');
            return data;
        } catch(err: any){
            if (err.response.status !== 409) throw err;
            router.push('/verify-email');
        }
    })

    const csrf = () => http.get('/sanctum/csrf-cookie');

    const register = async (setErrors: RegisterUserErrors, values: RegisterUser) => {
        await csrf()
        // setErrors([])
        try{
            await http.post('/register', values);
            mutate()
        } catch(err: any) {
            if (err.response.status !== 422) throw err
            setErrors(err.response.data.errors);
        }
    }

    const login = async (setErrors: LoginUserErrors, values: {email: string, password: string, remember: boolean} ) => {
        await csrf()
        // setErrors([])
        // setStatus(null)
        try {
            await http.post('/login', values);
            mutate();
        } catch (err: any) {
            if (err.response.status !== 422) throw error
            setErrors(err.response.data.errors)
        }
    }

    const forgotPassword = async ( setErrors: any, email: string) => {
        await csrf()

        setErrors([])
        // setStatus(null)
        try {
            const {data} = await http.post('/forgot-password', { email });
            // setStatus(data.status)
        } catch (err: any) {
            if (err.response.status !== 422) throw err
            setErrors(Object.values(err.response.data.errors).flat())
        }
    }

    const resetPassword = async ( setErrors: any, setStatus: any, values: any ) => {
        await csrf()
        setErrors([])
        setStatus(null)
        try {
            const { data } = await http.post('/reset-password', { token: router.query.token, ...values });
             router.push('/login?reset=' + Buffer.from(data.status, "base64"));
        } catch (err: any) {
            if (err.response.status != 422) throw err;
            setErrors(err.response.data.errors)   
        }
    }

    const resendEmailVerification = async ({ setStatus }: {setStatus: any}) => {
        try {
            const { data } = await http.post('/email/verification-notification')
            setStatus(data.status);
        } catch (err: any) {
            
        }
    }

    const logout = async () => {
        if (! error) {
            try{
                await http.post('/logout');
                mutate();
            } catch(err: any) {}
            
        }
        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}