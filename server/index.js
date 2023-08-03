const express=require('express')
const mongoose=require ('mongoose')
const cors =require('cors')
const AdddetailsModel=require('./models/Adddetails')

const app = express()
app.use(cors(
    {
        origin : ['frontend url of vercel'],
        methods : ["POST","GET","PUT"],
        credentials : true
    }
))
  
app.use(express.json())

//mongoose.connect("mongodb://127.0.0.1:27017/MERN")

const MONGODB_URI = 'mongodb+srv://ajaikulkarni21:19972204@cluster0.m7p0qzl.mongodb.net/Finvestfx?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to the database");
  });

  app.get('/',(req,res)=>{
    AdddetailsModel.find({})
    .then(adddeatails=>res.json(adddeatails))
    .catch(err=>res.json(err))
})
app.post("/create",(req,res)=>{
    AdddetailsModel.create(req.body)
    .then(adddeatails=>res.json(adddeatails))
    .catch(err=>res.json(err))
})


app.get('/:id', (req, res) => {
    const id = req.params.id;
    AdddetailsModel.findById({_id:id})
    .then(adddeatails => res.json(adddeatails))
    .catch(err => res.json(err))
})

app.put('/Edit/:id', (req, res) => {
    const id = req.params.id;
    AdddetailsModel.findByIdAndUpdate({_id :id}, {
        srno:req.body.srno,
         name:req.body.name, 
         image:req.body.image, 
         category:req.body.category, 
         label:req.body.label, 
         price:req.body.price, 
         description:req.body.description})
        .then(adddeatails => res.json(adddeatails))
        .catch(err => res.json(err))   
    })

// app.delete('/deleteItem/:id', (req, res) => {
//     const id = req.params.id;
//     ItemsModel.findByIdAndDelete({_id: id})
//     .then(res => res.json(res))
//     .catch(err => json(err))
// })

app.get('*',(req,res)=>{
    res.status(200).json({
      message:'bad request'
    })
  })

app.listen(3001, () => {
    console.log("Server is Running")
})

module.exports = app;