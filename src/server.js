//importerer nødvendige moduler og filer
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import brukerRoutes from "../src/routes/authRouter.js";
import { resourceLimits } from "worker_threads";

//konfigurasjon av server, ruter og port
const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

//oppretter express app og setter port
const app = express();
const PORT = process.env.PORT || 3004;

//middleware for å parse json data fra frontend
app.use(express.json());

//middleware for å serve statiske filer fra public mappen
app.use(express.static(path.join(__dirname, '..', "public")));

//API routes , vi bruker falske rutinger fra fronted og ruter til de riktige filer
app.use("/api/auth", brukerRoutes);

//rute for å serve index.html filen når brukeren går til root url
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "index.html"));
});

app.get("/start", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "hjemmeside.html"));

});

app.get("/maskiner", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "maskiner.html"));
});

app.get("/v", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "v.html"));
});


//starter serveren og lytter på porten, logg melding når serveren er i gang
app.listen(PORT, () => console.log("Server is running i http://localhost:3004"));
