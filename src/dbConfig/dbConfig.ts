import mongoose from "mongoose";

export async function connectToDatabase(uri: string): Promise<void> {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connection established");
        });
        connection.on("error", (err) => {
            console.log(
                "MOngoDB connection error. Please make sure MongoDB is running:",
                err
            );
            process.exit();
        });
    } catch (error) {
        console.log("Database connection error:", error);
        throw error;
    }
}
