import { registererBrukere } from "../models/authModels.js";
 
//export av dat fra login
export async function login(req, res)
{
  const {brukernavn, passord} = req.body; // body fra frontend
  console.log("authController bruknavn", brukernavn);
  console.log("authController passord", passord);
 
  const{data:registererBruker} = await registererBrukere(brukernavn, passord);
  console.log("authController test levering av database", registererBruker);
 
 
}