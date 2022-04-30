import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";

const Index: NextPage = () => {
    const {logout, user} = useAuth({ middleware: "auth" });
    return (
        <h1>{user?.email}</h1>
    );
}


export default Index;