import dotenv from "dotenv";

import { updateVideo } from "./actions";
import { ActionOptions } from "./types";

dotenv.config();

async function main(args: string[]) {
  const options: ActionOptions = {
    providerName: process.env.PROVIDER_NAME || "",
    dataMongodbUri:
      process.env.DATA_MONGODB_URI || "mongodb://127.0.0.1:27017/data",
    googleApiKey: process.env.GOOGLE_API_KEY || "",
  };

  const videoId = args[0];
  if (!videoId) {
    console.error("No video id provided");
    process.exit(1);
  }

  try {
    updateVideo(videoId, options);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main(process.argv.slice(2));
