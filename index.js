import  express  from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const list1 = [];
const list2 = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index.ejs",{liste : list1});
})

app.get("/today",(req,res)=>{
    res.render("index.ejs",{liste : list1});
})

app.get("/work",(req,res)=>{
    res.render("work.ejs",{liste : list2});
})

app.post("/save",(req,res)=>{
    list1.push(req.body["textName"]);
    res.redirect("/");
});

app.post("/workSave",(req,res)=>{
    list2.push(req.body["workName"]);
    res.redirect("/work");
});


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

