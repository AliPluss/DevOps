

import bcrypt from "bcryptjs";

export async function hashThePassword(regPassord) {

 try {   
 return await bcrypt.hash(regPassord, 10);
 } catch (error) {
    console.log("hashService hashThePassword error", error);
    throw new Error("Feil ved hashing av passord");
 }
}