import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1- QRCODE) ou (2- PASSWORD)",
    ),
    patter: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 ou 2"),
    required: true,
  },
];

export default mainPrompt;
