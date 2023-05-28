import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
	try {
		await mongoose.connect(config.database_url as string);
		console.log("Connect Database🛢️ Successfully");

		app.listen(config.port, () => {
			console.log(`Application listening on port ${config.port}`);
		});
	} catch (err) {
		console.log("Failed To Connect Database🛢️");
	}
}
main();
