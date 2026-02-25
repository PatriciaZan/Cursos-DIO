import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handler from "./handle";

async function createQRCode() {
  prompt.get(promptQRCode, handler);

  prompt.start();
}

export default createQRCode;
