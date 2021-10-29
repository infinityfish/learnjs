 const fs = require("fs")
 const formidable = require("formidable-serverless")
 const slugify = require("slugify")
 const path = require("path")
// import fs from "fs";
// import formidable from "formidable-serverless"
// import slugify from "slugify"
// import path from "path";

export const config = {
    api: {
      bodyParser: false
    }
  };


export default async function handler(req, res){

    const userFolder = "ericFolder"
    fs.mkdir(`./public/images/${userFolder}`, {recussive: true}, function(err){
        if (err) {
            return console.error(err);
        }
    }) // recussive will always give an error on windows. see documentation

    //make sure that file is only an image  https://www.section.io/engineering-education/uploading-files-using-formidable-nodejs/  
    const isFileValid = (file) => {
        const type = file.type.split("/").pop();
        const validTypes = ["jpg", "jpeg", "png"];
        if (validTypes.indexOf(type) === -1) {
          return false;
        }
        return true;
    };

    // const isValid = isFileValid(file);
    // if (!isValid) {
    //     // throes error if file isn't valid
    //     return res.status(400).json({
    //       status: "Fail",
    //       message: "The file type is not a valid type",
    //     });
    // }

    const data = await new Promise((resolve, reject) => {
        const form = formidable({
            multiples: true,
            uploadDir: `./public/images/${userFolder}`,
        })
        console.log('Directory created successfully!');

        //keep extensions
        form.keepExtensions = true
        form.keepFileName = true
    
        //I want to rename file
        form.on("fileBegin", function(name, file){

            //add isValid here
            file.path = path.join(`public/images/${userFolder}`, slugify(file.name))
            console.log("fileName changed: ", file.path)
        })

        form.parse(req, async (err, fields, files) => {

            //add is valid here
            if (err) return reject(err)
            //send to db from here
            console.log( files );
            console.log( fields );
            resolve(fields, files)
        })

    }) 

    // console.log(data);
    res.json(data)
}