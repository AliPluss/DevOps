async function autentisering()
{
  const brukernavn = document.getElementById("brukernavn").value;
  const passord = document.getElementById("passord").value;
 

  console.log(brukernavn);
  if (!brukernavn || !passord) {
      console.log("mangler brukernavn");
     
  }
  try {
    const authReq = await fetch("http://localhost:3004/api/auth/login",
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
  } catch (error)
  {
  console.log("try virket ikke");
 
  }
  }