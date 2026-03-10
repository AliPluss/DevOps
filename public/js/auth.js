
// funksjon for registrering 
async function registrer()
{
  const brukernavn = document.getElementById("brukernavn").value;
  const passord = document.getElementById("passord").value;
  const regStatusMsg = document.getElementById("regStatus");
 

  console.log(brukernavn);
  if (!brukernavn || !passord) {
      console.log("mangler brukernavn");
     
  }
  try {
    const authReq = await fetch("http://localhost:3004/api/auth/register",
    {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({brukernavn, passord}),
    });
 
    const authRes = await authReq.json();
    console.log("authRes", authRes);

    if(authRes.success === true){
        regStatusMsg.textContent = "bruker registrert";
        regStatusMsg.style.color = "green";
    }else{
        regStatusMsg.textContent = "feil brukernavn eller passord";
        regStatusMsg.style.color = "yellow";
    }

  } catch (error)
  {
  console.log("try virket ikke");
 
  }
  }


  
//funksjon loginn
async function autentisering()
{
  const loggbrukernavn = document.getElementById("brukernavn").value;
  const loggpassord = document.getElementById("passord").value;
  //const regStatusMsg = document.getElementById("regStatus");

  const loggStatusMsg = document.getElementById("loggStatus");

  console.log(loggbrukernavn);
  if (!loggbrukernavn || !loggpassord) {
      console.log(" brukernavn og / eller passord ikke skrevet inn");
     
  }
  try {
    const loggReq = await fetch("http://localhost:3004/api/auth/login",
    {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({loggbrukernavn, loggpassord}),
    });

 
    const loggRes = await loggReq.json();
    console.log("loggRes", loggRes);

    if(loggRes.success === true){
        loggStatusMsg.textContent = "bruker innlogget";
        loggStatusMsg.style.color = "green";
    }else{
        loggStatusMsg.textContent = "feil brukernavn eller passord";
        loggStatusMsg.style.color = "red";
    }

  } catch (error)
  {
  console.log("try virket ikke");
 
  }
  }