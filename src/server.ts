import  express, { request, response } from "express";
import "./database";

const app = express();

app.get("/",(request, response) => {
    return response.json({
        message: "Ola NLW5"
    });
}); 

app.post("/users", (request, response) => {
    return response.json({ message: "Usuario cadastrado!"})
});

app.listen(3333, () => console.log("Servidor is running"));
