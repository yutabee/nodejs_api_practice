const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT , () => console.log('サーバーが起動しました'));

app.get('/', (req, res) => {
    res.send('udemy講座を受講中');
});

const customers = [
    { title: '田中', id: 1 },
    { title: '斎藤', id: 2 },
    { title: '橋本', id: 3 },
    { title: '鈴木', id: 4 },
    { title: '安藤', id: 5 },
]

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.post('/api/customers', (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customer);
});

app.put('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

app.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    // customer.title = req.body.title;  今回は更新する必要がないので不要

    //customerがcustomersの配列の何番目にあるのかindexをとる
    const index = customers.indexOf(customer); 
    customers.splice(index, 1); //index番号が一致する配列を削除する

    res.send(customer);
});