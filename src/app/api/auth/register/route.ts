import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        // Await the connection
        await connect();

        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists. Please login." },
                { status: 400 }
            );
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User registered successfully.",
            status: 201,
            savedUser,
        });
    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error },
            { status: 500 }
        );
    }
}
