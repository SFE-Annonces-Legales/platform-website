import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import LoginPage from "../components/pages/LoginPage";

const Login: NextPage = () => {
    return (
        <MainLayout >
            <LoginPage />
        </MainLayout>
    );
}
export default Login;