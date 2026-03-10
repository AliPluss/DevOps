
// importerer nødvendige moduler og filer
import bcrypt from "bcryptjs";
import e from "express";

//funksjon for å hashe passord, tar inn regPassord som parameter, returnerer hashPassord
export async function hashThePassword(regPassord) {

 try { // returnerer hashPassord, som er resultatet av bcrypt.hash funksjonen, som tar inn regPassord og en saltRounds verdi på 10  
 return await bcrypt.hash(regPassord, 10);

 } catch (error) {// hvis det oppstår en feil i try-blokken, logg melding og returner error
    console.log("hashService hashThePassword error", error);
    throw new Error("Feil ved hashing av passord");
 }
}

export async function checkHashedPassword(loggPassord,loggBrukerePassord) {

    const validerPassord = await bcrypt.compare(loggPassord, loggBrukerePassord);

    if (!validerPassord) {
        return { success: false };
    }   
    else {
        return { success: true };
    }
    
}