import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Estabelece a conexão com o banco de dados MongoDB
// A string de conexão é obtida da variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instbacktest"
    const db = conexao.db("imersao-instbacktest");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Encontra todos os documentos na coleção "posts" e retorna um array com os resultados
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instbacktest"
    const db = conexao.db("imersao-instbacktest");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Encontra todos os documentos na coleção "posts" e retorna um array com os resultados
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    // Seleciona o banco de dados "imersao-instbacktest"
    const db = conexao.db("imersao-instbacktest");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Encontra todos os documentos na coleção "posts" e retorna um array com os resultados
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
}