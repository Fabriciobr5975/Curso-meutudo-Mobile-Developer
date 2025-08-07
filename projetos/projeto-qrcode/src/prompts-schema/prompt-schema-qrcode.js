import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCODE"),
        required: true,
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1 - Normal) ou (2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaQRCode;