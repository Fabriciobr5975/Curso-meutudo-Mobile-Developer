
export default function generatePass(): string {
  let password: string = "";
  let characteres: string = "Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!7458:;^~";
  let passwordLength = 8;

  for (let i: number = 0; i < passwordLength; i++) {
    password += characteres.charAt(Math.floor(Math.random() * passwordLength));
  }

  return password;
}
