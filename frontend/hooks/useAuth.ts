import useSWR, { Fetcher, Key } from 'swr'
import http from '../helpers/http'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RegisterUser } from '../interfaces/registerUser';
import { FormikErrors } from 'formik';
import User from '@/interfaces/user'

interface UseAuthArgs {
    middleware?: 'auth' | 'guest';
    redirectIfAuthenticated?: string;
}

interface Params<T>{
    setErrors: (e: FormikErrors<T>) => void;
    setStatus?: Dispatch<SetStateAction<string | null>>
    values: T;
}


export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthArgs = {}) => {
    const router = useRouter()
    const { data: user, error, mutate } = useSWR<User>('/api/user', async () =>{
        try{
            const { data } = await http.get('/api/user');
            return data;
        } catch(err: any){
            if (err.response.status !== 409) throw err;
            router.push('/verify-email');
        }
    })

    const csrf = () => http.get('/sanctum/csrf-cookie');

    const register = async ({ setErrors, values }: Params<RegisterUser>)=> {
        await csrf()
        setErrors({})
        try{
            await http.post('/register', values);
            mutate()
        } catch(err: any) {
            if (err.response.status !== 422) throw err
            setErrors(err.response.data.errors);
        }
    }

    const login = async ({setErrors, setStatus, values}: Params<{email: string, password: string, remember: boolean}> ) => {
        await csrf()
        setStatus!(null)
        try {
            await http.post('/login', values);
            mutate();
        } catch (err: any) {
            if (err.response.status !== 422) throw error
            setErrors(err.response.data.errors)
        }
    }

    const forgotPassword = async ({setErrors, setStatus, values}: Params<{ email: string }>) => {
        await csrf()
        setErrors({})
        setStatus!(null)
        try {
            const {data} = await http.post('/forgot-password', values);
            setStatus!(data.status)
        } catch (err: any) {
            if (err.response.status !== 422) throw err
            setErrors(err.response.data.errors)
        }
    }

    const resetPassword = async ({setErrors, setStatus, values}: Params<{email: string, password: string, password_confirmation: string}>) => {
        await csrf()
        setErrors({})
        setStatus!(null)
        try {
            const { data } = await http.post('/reset-password', { token: router.query.token, ...values });
             router.push('/login?reset=' + Buffer.from(data.status, "binary").toString("base64"));
        } catch (err: any) {
            if (err.response.status != 422) throw err;
            setErrors(err.response.data.errors)   
        }
    }

    const resendEmailVerification = async ({ setStatus }: {setStatus: Dispatch<SetStateAction<string | null>>}) => {
        try {
            const { data } = await http.post('/email/verification-notification')
            setStatus(data.status);
        } catch (err: any) {
            console.error(err.response.data.errors);
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