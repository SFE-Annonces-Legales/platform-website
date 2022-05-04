import { NextPage } from "next";
import { useAuth } from "@/hooks/useAuth";
import UserLayout from "@/components/layouts/UserLayout";

const Index: NextPage = () => {
    const { logout, user } = useAuth({ middleware: "auth" });
    return (
        <UserLayout>
            <h1>{user?.fullname}</h1>
        </UserLayout>
    );
}


export default Index;