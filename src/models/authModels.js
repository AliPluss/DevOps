// importerer nødvendige moduler og filer
import { supabase } from "../config/supabase.js";

//funksjon for å registere brukere i databasen, tar inn brukernavn og hashPassord som parametere
export async function registererBrukere(brukernaven, hashPassord) {
    // setter inn brukernavn og hashPassord i databasen, returnerer data fra databasen  
    return await supabase
        .from("Brukere")
        .insert({
            Brukernaven: brukernaven,
            passord: hashPassord
        })
        .select();
}
//---------------------------------------

//funksjon for å logge inn brukere, tar inn brukernavn og passord som parametere
export async function logginnBrukere(loggbrukernavn, loggpassord) {
    // henter data fra databasen der brukernavn er lik loggbrukernavn, returnerer data fra databasen
    return await supabase
        .from("Brukere")
        .select("BrukerID,  Brukernaven, passord")
        .eq("Brukernaven", loggbrukernavn)
        .single();
}