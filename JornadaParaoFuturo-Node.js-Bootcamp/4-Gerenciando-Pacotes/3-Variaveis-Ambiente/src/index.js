import { connectDB } from "./database/data";

async function main() {
  await connectDB("Patricia", "12345");
}
