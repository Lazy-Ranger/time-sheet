const multer = require('multer');
const {join} = require('path');
const uploads = join(__dirname,"../../../uploads")


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,uploads)
    },
    filename:function(req,file,cb){
        const [base,ext]= file.originalname.split('.');
        const filename  = `${base}-${Date.now()}-${ext}`
        cb(null,filename)
    },
})

const maxsize = 100*1024*1024;

const upload = multer({storage:storage,fileFilter:(req,file,cb)=>{
    if(file.mimetype=="application/pdf"){
      cb(null,true)
    }
    else{
      cb(null,false)
      return cb(new Error(`Only pdf file allowed!`))
    }
},
limits:{fileSize:maxsize}
}).single('file')


function multerUpload(req,res,next){
    upload(req,res,function(err){   
        if(err instanceof multer.MulterError){
            // A Multer error when uploading
            res.send(err)
        }
        else if(err){
            // An unknown errro occured when uploading
            res.send(err)
        }
        else{
            next();
        }
    })
}



module.exports={multerUpload}