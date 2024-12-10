import fs from "fs";

async function logRequest(req, res, next) {
    const currentdate = new Date();
    const datetime =
        currentdate.getDate().toString().padStart(2, "0") +
        "/" +
        (currentdate.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        currentdate.getFullYear().toString() +
        " @ " +
        currentdate.getHours().toString().padStart(2, "0") +
        ":" +
        currentdate.getMinutes().toString().padStart(2, "0") +
        ":" +
        currentdate.getSeconds().toString().padStart(2, "0");
    const logMessage = `${datetime}, Method: ${req.method}, Host: ${
        req.ip
    }, URL: ${req.url}, Body: ${JSON.stringify(req.body)}\n`;

    const fileName = new Date().toISOString().split("T")[0] + "_access.log";

    // Si le dossier log n'existe pas, on le crée
    if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
    }

    // Enregistrement dans le fichier
    fs.appendFile(`logs/${fileName}`, logMessage, (err) => {
        if (err) {
            console.error(
                "Erreur lors de l'enregistrement de la requête dans le fichier de log:",
                err,
            );
        }
    });

    // Affichage dans la console
    console.log(logMessage);
    next();
}

async function logError(err, req, res, next) {
    const currentdate = new Date();
    const datetime =
        currentdate.getDate().toString().padStart(2, "0") +
        "/" +
        (currentdate.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        currentdate.getFullYear().toString() +
        " @ " +
        currentdate.getHours().toString().padStart(2, "0") +
        ":" +
        currentdate.getMinutes().toString().padStart(2, "0") +
        ":" +
        currentdate.getSeconds().toString().padStart(2, "0");
    const logMessage = `${datetime}, Method: ${req.method}, Host: ${
        req.ip
    }, URL: ${req.url}, Body: ${JSON.stringify(req.body)}, Error: ${err}\n`;

    const fileName = new Date().toISOString().split("T")[0] + "_error.log";

    // Si le dossier log n'existe pas, on le crée
    if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
    }

    // Enregistrement dans le fichier
    fs.appendFile(`logs/${fileName}`, logMessage, (err) => {
        if (err) {
            console.error(
                "Erreur lors de l'enregistrement de la requête dans le fichier de log:",
                err,
            );
        }
    });

    // Affichage dans la console
    console.log(logMessage);
    next(err);
}

export default {
    logRequest,
    logError,
};
