import UserLayout from "@/components/layouts/UserLayout";
import { useAuth } from "@/hooks/useAuth";


const Profile = () => {
    const { user } = useAuth({ middleware: "auth" })
    return (
        <UserLayout>
            <h1>{user!.type === "pro" ? user?.company : user?.fullname}</h1>
        </UserLayout>
    );
}
export default Profile;