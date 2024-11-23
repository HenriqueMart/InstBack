import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });
  

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON
    app.use(express.json());

    // Define uma rota GET para obter todos os posts
    app.get("/posts", listarPosts);

    //Criar um novo Post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;

