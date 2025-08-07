import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "../qrcode/handleQrCode.js";

export default async function createQRCode() {
    prompt.get(promptSchemaQRCode, handle);
}