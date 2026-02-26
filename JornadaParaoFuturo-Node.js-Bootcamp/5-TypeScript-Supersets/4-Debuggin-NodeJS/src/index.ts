import { getBaseEmail } from "./services/email";

async function main() {
  console.log(await getBaseEmail("Patricia"));

  console.log("Finalizado");
  console.log(". . . ");
}

//getBaseEmail("Patricia");

main();
