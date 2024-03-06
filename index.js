const ex=require('express')
const man=require('mongoose')
const dotenv = require('dotenv')
const bodyparse=require('body-parser')
const ap=ex()
dotenv.config()
const usern=process.env.user_name;
const passw=process.env.password;
const bd=`mongodb+srv://${usern}:${passw}@nobita.1zrnv9x.mongodb.net/?retryWrites=true&w=majority&appName=nobita`
ap.listen(3000)
const blo=man.Schema;
const ki=new blo({
    per1:{
        type: String,
        require:true
    },
    per2:{
        type: String,
        require:true
    },
    
});
const mlog=man.model('L_Name',ki);
ap.use(bodyparse.urlencoded({extended:true}))
ap.use(bodyparse.json())
man.connect(bd)
.then((re)=>console.log('connect db'))
.catch((err)=>console.log('hello',err))
ap.get('/',(req,res)=>{
    res.sendFile(__dirname+'/frontend/front.html')
})
ap.post('/',(re,res)=>{
    const bl=new mlog(re.body)
    bl.save()
    .then((re)=>{
        console.log(re)
    })
})