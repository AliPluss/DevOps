import { supabase } from "../config/supabase.js";
 
export async function registererBrukere(brukernaven, hashPassord )
{
  return await supabase
  .from ("Brukere")
  .insert({
    Brukernaven: brukernaven,
    passord: hashPassord 
  })
    .select();
}


export async function logginnBrukere(loggbrukernavn, loggpassord)
{

  return await supabase 
    .from ("Brukere")
    .select("BrukerID,  Brukernaven, passord")
    .eq("Brukernaven", loggbrukernavn)
    .single();
}