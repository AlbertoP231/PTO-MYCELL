const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id: 1,
        name: 'Audiofonos chicharito',
        price: 50,
        image: "pictures-proyect/AUDCHHICHARITO.jpeg",
        stock: 50  

    },
    {
        id: 2,
        name: 'Audifonos ligthning',
        price: 150,
        image: "pictures-proyect/AUD LIGTHNING.jpeg",
        stock: 50

    },
    {
        id: 3,
        name: 'Bascula gramera',
        price: 250,
        image: "pictures-proyect/BASCULAGRAMERA.jpeg",
        stock: 50

    },
    {
        id: 4,
        name: 'Bocina GTS1334BT',
        price: 350,
        image: "pictures-proyect/BC3-GTS1346BT.jpeg",
        stock: 50

    },
    {
        id: 5,
        name: 'Bocina GTS1360BLETHOTH',
        price: 450,
        image: "pictures-proyect/BC3-GTS1360BLUETHOTH.jpeg",
        stock: 50

    },
    {
        id: 6,
        name: 'Bocina 1223',
        price: 550,
        image: "pictures-proyect/BOCINA1223.jpeg",
        stock: 50

    },
    {
        id: 7,
        name: 'Cargador 1',
        price: 650,
        image: "pictures-proyect/CARGADOR1.jpeg",
        stock: 50

    },
    {
        id: 8,
        name: 'Cargador 2',
        price: 750,
        image: "pictures-proyect/CARGADOR2.jpeg",
        stock: 50

    },
    {
        id: 9,
        name: 'Dispensador electtrico',
        price: 850,
        image: "pictures-proyect/DISPENSADORELEC.jpeg",
        stock: 50

    }, 
    {
        id: 10,
        name: 'Megafono',
        price: 950,
        image: "pictures-proyect/megafono.jpeg",
        stock: 50

    }, 
    {
        id: 11,
        name: 'Termos',
        price: 1050,
        image: "pictures-proyect/TERMOS.jpeg",
        stock: 50

    },
    {
        id: 12,
        name: 'Termos 2',
        price: 1150,
        image: "pictures-proyect/TERMOS2.jpeg",
        stock: 50

    },
];
Z
app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/",express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
});

