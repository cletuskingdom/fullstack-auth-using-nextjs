"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const logout = async () => {
        try {
            const response = await axios.get("/api/auth/logout");
            console.log(response.data.message);
            toast.success("Logged out successfully");
            // Optionally, redirect the user or update UI after logout
            router.push("/auth/login");
        } catch (error: any) {
            console.error(
                "Logout failed:",
                error instanceof Error ? error.message : error
            );
            toast.error(
                error instanceof Error
                    ? error.message
                    : "An error occurred during logout"
            );
        }
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>

            <hr />
            <button onClick={logout} className="bg-amber-600">
                LOGOUT
            </button>
        </div>
    );
}
