import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import RegisterPage from "../components/pages/RegisterPage";


const Register: NextPage = () => {
    return (
        <MainLayout>
            <RegisterPage />
        </MainLayout>
    );
}
export default Register;