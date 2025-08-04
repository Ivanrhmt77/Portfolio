import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deployTime = new Date().toISOString();
const filePath = path.join(__dirname, "..", "public", "deploy-info.json");

const data = {
  lastDeploy: deployTime,
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Updated deploy time: ${deployTime}`);
