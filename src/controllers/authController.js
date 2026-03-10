//import av dat fra register
import { registererBrukere } from "../models/authModels.js";
import { logginnBrukere } from "../models/authModels.js";
import { hashThePassword } from "../services/authService.js";

//export av dat fra login
export async function register(req, res) {
    //henter data fra body i frontend og legger i variabler brukernavn og passord
    const { brukernavn, passord } = req.body; // body fra frontend
    console.log("authController bruknavn", brukernavn);
    console.log("authController passord", passord);

    //validering av data hashing av passord
    const hashPassord = await hashThePassword(passord);
    console.log("authController hashPassord", hashPassord);

    // validering av data brukernavn og hashPassord
    const { data: registererBruker } = await registererBrukere(brukernavn, hashPassord);
    console.log("authController test levering av database", registererBruker);

    //hvis registererBruker er true, returner success, ellers returner error
    if (registererBruker) {

        console.log("authController registrering : bruker registrert");
        // returner success til frontend
        return res.status(200).json({ success: true, message: "Innlogging vellykket" });
    }
    else {
        console.log("authController registrering : feil brukernavn eller passord");
        // returner error til frontend
        return res.status(401).json({ success: false, message: "Feil brukernavn eller passord" });
    }

}

//-------------------------------------------------------------

//export av dat fra loginn
export async function login(req, res) {
    //henter data fra body i frontend og legger i variabler brukernavn og passord
    const { loggbrukernavn, loggpassord } = req.body; // body fra frontend
    console.log("authController bruknavn", loggbrukernavn);
    console.log("authController passord", loggpassord);
     
    // validering av data brukernavn og passord
    const { data: loggBrukere } = await logginnBrukere(loggbrukernavn, loggpassord);
    console.log("authController test levering av database", loggBrukere);

    //hvis loggBrukere er true, returner success, ellers returner error
    if (loggBrukere) {

        console.log("authController login : innlogging vellykket");
        // returner success til frontend
        return res.status(200).json({ success: true, message: "Innlogging vellykket" });
    }
    else {

        console.log("authController login : feil brukernavn eller passord");
        // returner error til frontend
        return res.status(401).json({ success: false, message: "Feil brukernavn eller passord" });
    }
}