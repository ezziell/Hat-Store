const express = require('express');
const routerApi = require('./routes')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
   res.send("hola mi server express")
})

app.listen(port, () => {
  console.log("esoo si anda" + port);
});

routerApi(app);
