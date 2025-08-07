import qrcode from "qrcode-terminal";
import chalk from "chalk";

export default async function handle(err, result) {
    if(err) {
        console.error("Error on application");
        return;
    }

    const isSmall = result.type === "2";
    qrcode.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.bold("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
}
