
// funksjon for registrering 
async function registrer() {
    //henter data fra input i frontend og legger i variabler brukernavn og passord
    const brukernavn = document.getElementById("brukernavn").value;
    const passord = document.getElementById("passord").value;
    const regStatusMsg = document.getElementById("regStatus");


    console.log(brukernavn);
    //validering av data, hvis brukernavn eller passord er tomt, logg melding og returner
    if (!brukernavn || !passord) { console.log("mangler brukernavn"); }

    //hvis brukernavn og passord er skrevet inn, send data til backend
    try {
        const authReq = await fetch("http://localhost:3004/api/auth/register",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ brukernavn, passord }),
            });

        //hent respons fra backend og logg den
        const authRes = await authReq.json();
        console.log("authRes", authRes);

        //hvis authRes.success er true, logg melding og returner success, ellers logg melding og returner error
        if (authRes.success === true) {
            regStatusMsg.textContent = "bruker registrert";
            regStatusMsg.style.color = "green";

        } else {// hvis authRes.success er false, logg melding og returner error
            regStatusMsg.textContent = "feil brukernavn eller passord";
            regStatusMsg.style.color = "yellow";
        }

    } catch (error) {// hvis det oppstår en feil i try-blokken, logg melding og returner error
        console.log("try virket ikke");
        throw new Error("Feil ved registrering av bruker");
    }
}



//funksjon loginn
async function autentisering() {
    //henter data fra input i frontend og legger i variabler brukernavn og passord
    const loggbrukernavn = document.getElementById("loggbrukernavn").value;
    const loggpassord = document.getElementById("loggpassord").value;
    const loggStatusMsg = document.getElementById("loggStatus");

    console.log(loggbrukernavn, loggpassord);
    console.log("loggbrukernavn", loggbrukernavn);
    console.log("loggpassord", loggpassord);
    //validering av data, hvis brukernavn eller passord er tomt, logg melding og returner
    if (!loggbrukernavn || !loggpassord) {
        console.log(" brukernavn og / eller passord ikke skrevet inn");
    }
    //hvis brukernavn og passord er skrevet inn, send data til backend
    try {
        const loggReq = await fetch("http://localhost:3004/api/auth/login",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ loggbrukernavn, loggpassord }),
            });

        //hent respons fra backend og logg den
        const loggRes = await loggReq.json();
        console.log("loggRes", loggRes);

        //hvis loggRes.success er true, logg melding og returner success, ellers logg melding og returner error
        if (loggRes.success === true) {
            loggStatusMsg.textContent = "bruker innlogget";
            loggStatusMsg.style.color = "green";

        } else {// hvis loggRes.success er false, logg melding og returner error
            loggStatusMsg.textContent = "feil brukernavn eller passord";
            loggStatusMsg.style.color = "red";
        }

    } catch (error) {// hvis det oppstår en feil i try-blokken, logg melding og returner error
        console.log("try virket ikke");
        throw new Error("Feil ved innlogging av bruker");

    }
}