import formidable from "formidable-serverless";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res){


    const data = await new Promise((resolve, reject) => {

          const form = new formidable.IncomingForm();

          form.parse(req, async function (err, fields, files) {
              if (err) return reject(err)
              await saveFile(files.file);
              resolve(fields, files)
          });

          const saveFile = async (file) => {
            const data = fs.readFileSync(file.path);
            fs.writeFileSync(`./public/${file.name}`, data);
            await fs.unlinkSync(file.path);
            return;
          };
    }) 
    // now insert data variable info into db
    res.json(data)
}

