"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Optional: nice icons
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.jpeg"
                            alt="My Company Logo"
                            width={150}
                            height={50}
                            priority
                            className="h-12 w-auto hover:opacity-80 transition"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/features"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Features
                        </Link>
                        <Link
                            href="/communities"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Communities
                        </Link>
                        <Link
                            href="/events"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Events
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            About us
                        </Link>
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Login
                        </Link>
                        <Link
                            href="/join"
                            className="bg-black text-white px-7 py-3 rounded-full hover:bg-blue-600 transition font-semibold shadow-lg hover:shadow-xl"
                        >
                            Join for free
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <nav className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-6 py-4 space-y-4">
                            <Link
                                href="/features"
                                className="block text-gray-700 hover:text-blue-600 transition py-2"
                            >
                                Features
                            </Link>
                            <Link
                                href="/communities"
                                className="block text-gray-700 hover:text-blue-600 transition py-2"
                            >
                                Communities
                            </Link>
                            <Link
                                href="/events"
                                className="block text-gray-700 hover:text-blue-600 transition py-2"
                            >
                                Events
                            </Link>
                            <Link
                                href="/about"
                                className="block text-gray-700 hover:text-blue-600 transition py-2"
                            >
                                About us
                            </Link>
                            <Link
                                href="/login"
                                className="block text-gray-700 hover:text-blue-600 transition py-2"
                            >
                                Login
                            </Link>
                            <Link
                                href="/join"
                                className="block w-full text-center bg-black text-white px-7 py-4 rounded-full hover:bg-blue-600 transition font-semibold"
                                onClick={() => setIsOpen(false)}
                            >
                                Join for free
                            </Link>
                        </div>
                    </nav>
                )}
            </header>

            <main className="min-h-screen pt-10 px-10 mx-auto bg-gray-50">
                {/* Text + Buttons */}
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        FIND YOUR API
                        <br />
                        BUILD YOUR NETWORK
                    </h1>

                    <p className="pt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Connect with like-minded companies for fun,
                        <br className="hidden sm:block" />
                        friendship, and business growth.
                    </p>

                    <div className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
                        {/* Primary Button */}
                        <Link
                            href="/join"
                            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl text-center"
                        >
                            Join for free
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/login"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition-all font-medium underline-offset-4 hover:underline text-center text-lg"
                        >
                            <span className="w-5 h-5 rounded-full overflow-hidden">
                                <Image
                                    src="/explore_opportunities.jpg"
                                    alt="Explore opportunities"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            </span>
                            <span>Explore APIs and Opportunities</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Image – Never stretch, never crop */}
                <div className="w-full max-w-5xl mx-auto mt-10">
                    <Image
                        src="/welcome_banner.jpg"
                        alt="Hero Image"
                        width={1920}
                        height={1080}
                        priority
                        className="w-full hidee h-auto rounded-2xl object-contain"
                        style={{ maxWidth: "100%", height: "auto" }} // extra safety
                    />
                </div>
            </main>
        </>
    );
}
