const {Images} = require("../model/Images");
const {Router} = require("express")
const imageRouter = Router()

const {upload} = require("../middleWares/imageUpload");

imageRouter.post("/", upload.array("images", 5), async function (req, res) {    try {
      const {title, content} = req.body;
      const image = [];
      req.files.forEach(function (item) {
        images.push({
          filename: item.filename,
          originalname: item.originalname,
        });
      });
  
      const images = await new Images({
        // title:title,content:content,images:images
        ...req.body,
        image,
      }).save();
      return res.send({images});
    } catch (error) {
      return res.status(500).send({error: error.message});
    }
  });

module.exports = {imageRouter};