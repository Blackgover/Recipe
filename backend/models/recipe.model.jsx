import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema(
    {
        pictute: {
            type: Image,
        },
        ingridients: {
            type: String,
            required: true,
        },
        procedure: {
            type: String,
            required: true,
        },
        link: {
            type: String
        }
    }
)