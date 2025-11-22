import mongoose from "mongoose";

export async function connect() {
    try {
        const mongoUrl =
            "mongodb+srv://cletuskingdom_db_user:CkyYlsbc9UwU7RW0@cluster0.inge7x4.mongodb.net/staging?retryWrites=true&w=majority";

        if (!mongoUrl) {
            throw new Error("MONGO_URL environment variable is not set");
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
