import { supabase } from "../config/supabase.js";
 
export async function registererBrukere(brukernaven, passord )
{
  return await supabase
  .from ("Brukere")
  .insert({
    Brukernaven: brukernaven,
    passord: passord
  
   
  })
    .select();
}