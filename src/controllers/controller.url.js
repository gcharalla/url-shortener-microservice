import { urlModel } from "../models/urlSchema";

export const saveUrl = async (req,res,next) => {
    try {
        const originalUrl = req.body.url;
        const shortUrl = Math.floor(Math.random() * 100) + 1;

        const result = await urlModel.findOne({ original_url: originalUrl });
  
        if (!result) {
            await urlModel.create({ original_url: originalUrl, short_url: shortUrl });
            res.json({ original_url: originalUrl, short_url: shortUrl })
        }else{
            res.json({ original_url:result.original_url, short_url:result.short_url });
        }
        
    } catch (error) {
        next(error);
    }
}

export const getUrl = async (req,res,next)=>{
    try {
        const shortUrl = req.params.shortUrl;
        const result = await urlModel.findOne({ short_url: shortUrl });
  
        if (!result) {
            res.status(404).send('URL not found');
        } else {
            res.redirect(result.original_url);
        }
    } catch (error) {
        next(error);
    }
}