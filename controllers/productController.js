const listProducts = [
  {
    id: 1,
    titulo: "Monitor ",
    description: "Monitor Gamer Samsung LF27T350FHLCZB 27”",
    price: "$70.199",
  },
  {
    id: 2,
    titulo: "pendrive",
    description: "Pendrive Kingston 128GB - USB 3.2",
    price: "$5999",
  },
  {
    id: 3,
    titulo: "Pc ",
    description: "PC CPU EXO UNITED GAMERS K7V",
    price: "$249000",
  },
];



const mainController = {
    index: (req, res) => {
        res.render("index", { products: listProducts });
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const products = listProducts.find(plato => plato.id == id);
        res.render("detailProducts", { products });
    }
}

module.exports = mainController;