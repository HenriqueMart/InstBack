// Importa as dependências necessárias para o projeto
import express from "express"; // Importa o framework Express para criar o servidor web
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

