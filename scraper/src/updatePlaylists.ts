import dotenv from "dotenv";
import { readFileSync } from "fs";

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

  const fileName = args[0];
  if (!fileName) {
    console.error("No playlist ids file provided");
    process.exit(1);
  }

  try {
    const fileContent = readFileSync(fileName, "utf8");
    const ids = fileContent
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    for (const playlistId of ids) {
      console.info(
        `Updating upload playlist ${playlistId} (${
          ids.indexOf(playlistId) + 1
        }/${ids.length})`
      );

      await updatePlaylist(playlistId, options);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main(process.argv.slice(2));
