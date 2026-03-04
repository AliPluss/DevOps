import express from "express";
import path from "path";
import { fileURLToPath } from "url";
 
//routes import
import brukerRoutes from "../src/routes/authRouter.js";
import { resourceLimits } from "worker_threads";
 
const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);
 
const app = express();
const PORT = process.env.PORT || 3004;
 
app.use(express.json());
 
app.use(express.static(path.join(__dirname,'..', "public")));
 
//API routes , vi bruker falske rutinger fra fronted og ruter til de riktige filer
app.use("/api/auth", brukerRoutes);
 
 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'..', "public", "index.html"));
});
 
app.listen(PORT, () => console.log("Server is running i http://localhost:3004"));
 