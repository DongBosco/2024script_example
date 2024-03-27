const {Images} = require("../model/Images");
const {Router} = require("express")
const imageRouter = Router()

const {upload} = require("../middleWares/imageUpload");

imageRouter.post("/", upload.array("images",10), async (req, res)=> {
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

      const image = await new Images({
        title,content,images
      }).save();
      
      return res.send({image});
    } catch (error) {
      return res.status(500).send({error: error.message});
    }
  });

module.exports = {imageRouter};