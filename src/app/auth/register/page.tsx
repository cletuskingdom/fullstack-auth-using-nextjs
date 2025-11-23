"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            await axios.post("/api/auth/register", user);
            toast.success("Registered successfully! Please login.");
            router.push("/auth/login");
        } catch (error: any) {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "An error occurred during registration";
            toast.error(errorMessage);
            console.log("Error during sign up", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl mb-5">Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <button
                onClick={onSignUp}
                disabled={buttonDisabled || loading}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {buttonDisabled
                    ? "No signup"
                    : loading
                    ? "Processing..."
                    : "Sign Up"}
            </button>
            <Link href="/auth/login">Registered? Login here</Link>
        </div>
    );
}
