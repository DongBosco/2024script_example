const multer = require("multer");
const {v4:uuid} = require("uuid");
const mime = require("mime-types")

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,uuid()+'.'+mime.extension(file.mimetype))
    }
}
)
const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
   if(["image/png","image/jpeg"].includes(file.mimetype)){
        cb(null,true)
   }
    else{
        cb(new Error("잘못된 파일 형식입니다."),false)
    }
},
limits:{
    fileSize: 1024*1024*5
}
})

module.exports = {upload}