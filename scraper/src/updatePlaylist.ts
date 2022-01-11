import dotenv from "dotenv";

import { updatePlaylist } from "./actions";
import { ActionOptions } from "./types";

dotenv.config();

async function main(args: string[]) {
  const options: ActionOptions = {
    providerName: process.env.PROVIDER_NAME || "",
    dataMongodbUri:
      process.env.DATA_MONGODB_URI || "mongodb://127.0.0.1:27017/data",
    googleApiKey: process.env.GOOGLE_API_KEY || "",
  };

  const paylistId = args[0];
  if (!paylistId) {
    console.error("No playlist id provided");
    process.exit(1);
  }

  try {
    updatePlaylist(paylistId, options);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main(process.argv.slice(2));
