const express = require(`express`);
const path = require(`path`);

const app = express();

app.set(`view engine`, `ejs`);
app.use(express.static(path.join(__dirname, `public`)));

app.get(`/`, (req, res) => {
    const dataReceitas = [
        {
            image: `./assets/img/receitas/tigela-de-abacate.jpg`,
            title: `Tigela de abacate`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-abacate`
        },
        {
            image: `./assets/img/receitas/salada-de-kiwi.jpg`,
            title: `Salada de kiwi`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-kiwi`
        },
        {
            image: `./assets/img/receitas/mix-de-vegetais.jpg`,
            title: `Mix de vegetais`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-vegetais`
        },
        {
            image: `./assets/img/receitas/pimentoes-a-juliana.jpg`,
            title: `Pimentões à Juliana`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-pimentoes`
        },
        {
            image: `./assets/img/receitas/prato-oriental.jpg`,
            title: `Prato Oriental`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-oriental`
        },
        {
            image: `./assets/img/receitas/beterrabas-assadas.jpg`,
            title: `Beterrabas assadas`,
            paragraph: `Receita refrescante e cheia de vitaminas para seu café da manhã`,
            button: `receita__botao botao-beterrabas`
        }
    ];
    const dataPessoas = [
        {
            imageClass: `pessoa__img pessoa__img--roberta`,
            title: `Roberta`,
            paragraph: `Conteudista`
        },
        {
            imageClass: `pessoa__img pessoa__img--marcela`,
            title: `Marcela`,
            paragraph: `Chef de Cozinha`
        },
        {
            imageClass: `pessoa__img pessoa__img--andreia`,
            title: `Andréia`,
            paragraph: `Pequena Produtora`
        }
    ]
    res.render(`index`, {
        receitas: dataReceitas,
        pessoas: dataPessoas
    })
});

app.listen(8040);

console.log(`Rodando`);