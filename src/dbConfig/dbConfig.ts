import mongoose from "mongoose";

export async function connect() {
    try {
        const mongoUrl = process.env.MONGODB_URI;

        if (!mongoUrl) {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        await mongoose.connect(mongoUrl);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connection established");
        });

        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error. Please make sure MongoDB is running:",
                err
            );
            process.exit();
        });
    } catch (error) {
        console.log("Database connection error:", error);
        throw error;
    }
}
