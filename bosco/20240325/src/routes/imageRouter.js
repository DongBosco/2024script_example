const {Router} = require("express")
const {Image}= require("../model/Images")
const {upload} = require("../middleWares/imageUpload");
const imageRouter = Router()

imageRouter.post("/", upload.array("images"), async (req, res)=> {
    try {
      console.log(req.files);
      const {title, content} = req.body;
      const images =[] 
      req.files.forEach((item)=>{
        images.push({
            originalname : item.originalname,
            filename : item.filename
        });
      })

      const image = await new Image({
        title,content,images
      }).save();
      
      return res.send({image});
    } catch (error) {
      return res.status(500).send({error: error.message});
    }
  });
  
module.exports={imageRouter}

