import dotenv from "dotenv";

import { updateChannel } from "./actions";
import { ActionOptions } from "./types";

dotenv.config();

async function main(args: string[]) {
  const options: ActionOptions = {
    providerName: process.env.PROVIDER_NAME || "",
    dataMongodbUri:
      process.env.DATA_MONGODB_URI || "mongodb://127.0.0.1:27017/data",
    googleApiKey: process.env.GOOGLE_API_KEY || "",
  };

  const channelId = args[0];
  if (!channelId) {
    console.error("No channel id provided");
    process.exit(1);
  }

  try {
    updateChannel(channelId, options);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main(process.argv.slice(2));
