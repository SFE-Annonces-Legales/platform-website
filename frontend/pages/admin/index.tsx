import { useAuth } from "@/hooks/useAuth";


const AdminDashboard = () => {
    useAuth({ middleware: "auth", role: "admin" });
    return (
        <h1 className="display-4">Hello admin</h1>
    );
}
export default AdminDashboard;