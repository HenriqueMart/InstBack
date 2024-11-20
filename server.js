import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Foto teste",
        imagens: "https://placecats.com/millie/300/150",
      },
      {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagens: "https://source.unsplash.com/random/300x200",
      },
      {
        id: 3,
        descricao: "Cachorro fofo",
        imagens: "https://place.dog/300/200",
      },
      {
        id: 4,
        descricao: "Comida deliciosa",
        imagens: "https://loremflickr.com/300/200/food",
      },
      {
        id: 5,
        descricao: "Citação inspiradora",
        imagens: "https://picsum.photos/300/200",
        autor: "Autor famoso",
      },
      {
        descricao: "Gráfico interessante",
        imagens: "https://www.chartjs.org/samples/latest/utils/utils.png",
        tags: ["dados", "visualização"]
      }
];

const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscaPostPorID(id){
    return posts.findIndex((post) => {
        return post.id == Number(id)
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
