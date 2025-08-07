import permittedCharacters from "./utils/permittedCharacters.js";

export default async function handle() {
    let caracteres = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH;;
    caracteres = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        password += caracteres[index];
    }

    return password;
}