// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { error } = require('console');

// Define operations
const app = express();
const port = 3000;

// Define CORS and Body Parser
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'db2' // Replace 'your_database_name' with the actual name of your database
});

// Verify connection to the database
db.connect(err => {
    if (err) {
        console.error('Connection to the database failed:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server listening on port', port);
});


//to get data from db
app.get('/getProducts',(req,res)=>{
    const sql="select * from product";
    db.query(sql,(err,result)=>{
        if(err){
            console.error('Error in fetching data');
            res.status(500).json({error:'An error occured'});
        }
        else{
           res.status(200).json(result);
        }
    });
});

//to indert product
app.post('/addProduct',(req,res)=>{
    const {id,name,orderdate,ordertime}=req.body;
    const sql='insert into product value(?,?,?,?)';
    db.query(sql,[id,name,orderdate,ordertime],(err,result)=>{
        if(err){
            console.error('Error in adding meeting',err);
            result.status(500).json({error:'An error occured'});
        }
        else{
            res.status(200).json({message:'Meeting added successfully'});
        }       
    });
});

//updaion of product

app.put('/updateProduct',(req,res)=>{
    const {id,name,orderdate,ordertime}=req.body;
    const sql='update product set name=?, orderdate=?, ordertime=? where id=?';
    db.query(sql,[name,orderdate,ordertime,id],(err,result)=>{
        if(err){
            console.error('Error in adding meeting',err);
            result.status(500).json({error:'An error occured'});
        }
        else{
            res.status(200).json({message:'Meeting updated successfully'});
        }       
    });
});


//deletion
app.delete('/deleteProduct/:id',(req,res)=>{
   const id=req.params.id;
    const sql='delete from product where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
            console.error('Error in adding meeting',err);
            result.status(500).json({error:'An error occured'});
        }
        else{
            res.status(200).json({message:'Meeting deleted successfully'});
        }       
    });
});

//to get a product with id
app.get('/getProduct/:id',(req,res)=>{
    const id=req.params.id;
     const sql='select * from product where id=?';
     db.query(sql,[id],(err,result)=>{
         if(err){
             console.error('Error in adding meeting',err);
             result.status(500).json({error:'An error occured'});
         }
         else{
             res.status(200).json(result);
         }       
     });
 });


 app.post('/register', (req, res) => {
    const { username, email, phone, password, address } = req.body;
    // Perform registration logic, e.g., insert the user into the database
    const sql = 'INSERT INTO registered_clients (username, email, phone, password, address) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [username, email, phone, password, address], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'An error occurred while registering the user' });
        } else {
            console.log('User registered successfully');
            res.status(200).json({ message: 'User registered successfully' });
        }
    });
});


app.get('/getProject',(req,res)=>{
    const sql="select * from Project";
    db.query(sql,(err,result)=>{
        if(err){
            console.error('Error in fetching data');
            res.status(500).json({error:'An error occured'});
        }
        else{
           res.status(200).json(result);
        }
    });
});

//to indert product
app.post('/addProject',(req,res)=>{
    const {projectId,projectName,projectDescription,ExpectedDateOfDelivery,TeamOwned}=req.body;
    const sql='insert into Project value(?,?,?,?,?)';
    db.query(sql,[projectId,projectName,projectDescription,ExpectedDateOfDelivery,TeamOwned],(err,result)=>{
        if(err){
            console.error('Error in adding project',err);
            result.status(500).json({error:'An error occured'});
        }
        else{
            res.status(200).json({message:'Project added successfully'});
        }       
    });
});