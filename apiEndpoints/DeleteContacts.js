import express from "express";
import mongoose from "mongoose";
import ContactSchema from "../Schema/ContactSchema.js";

const delr = express.Router()

delr.post("/delete", (req, res) => {
    const model = mongoose.model('data', ContactSchema);
    model.findOneAndDelete({ email: req.body.email })
        .then((updatedData) => {
            if (updatedData) {
                res.status(200).send('Data deleted successfully');
            } else {
                res.status(404).send('Data not found');
            }
        })
        .catch((err) => {
            res.status(500).send('Error while updating data');
        });
});

export default delr;
