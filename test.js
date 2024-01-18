import { createClient } from 'redis';
import 'dotenv/config'
import express from "express"
const app = express();
// const client = createClient({
//     url:`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
// });

app.get('/', (req, res) => {
    
    res.send(`<h1 style="text-align: center;">Hello World!11113</h1>`);
});
// app.get('/set', async(req, res) => {
//     let test = "success";
//     try{
//         await client.connect();
//         await client.set('key', 'test');
//     }catch(e) {
//         test = e
//     }
//     res.send(`<h1 style="text-align: center;">${test}</h1>`);
// });
// app.get('/get', async(req, res) => {
//     let value = "value";
//     try{
//         // await client.connect();
//         value = await client.get('key');
//     }catch(e){
//         value = e
//     }
//     // const value = "aaa";
//     console.log(value)
//     // res.send("value is:",value)
//     res.send(`<h1 style="text-align: center;">value is:${value}</h1>`);
// });




const port = 8080;
// Listen on port
app.listen(port, () => {
    console.log(`Running at - http://localhost:${port}`);
});


// const client = createClient({
//     url:`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
// });
// // init();

// async function init(){
//     await client.on('error', err => console.log('Redis Client Error', err));

//     await client.connect();



//     await client.set('key', 'qqqqqqqqqqq');
//     const value = await client.get('key');
//     console.log("DDDD",value)
// }