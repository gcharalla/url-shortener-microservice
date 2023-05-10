import mongoose from "mongoose";

// Modelo de datos para la URL
const urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: Number,
  });

export const urlModel = mongoose.model('url', urlSchema);