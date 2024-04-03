const {default: mongoose} = require("mongoose");

const ImagesSchema = mongoose.Schema(
  {
    title: {type: String, required: true},
    content: {type: String, required: true},
    images: [{filename: String, originalname: String}],
  },
  {timestamps: true}
);
const Image = mongoose.model("image", ImagesSchema);
module.exports = {Image};