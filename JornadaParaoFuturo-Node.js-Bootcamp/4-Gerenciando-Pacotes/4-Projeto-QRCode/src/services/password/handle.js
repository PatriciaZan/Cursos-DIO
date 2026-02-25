import permittedChar from "../password/utils/permitted-characters.js";

async function handle() {
  let characters = [a, b, c, d];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedChar();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
