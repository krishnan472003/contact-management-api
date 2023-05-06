import express from "express";
import mongoose from "mongoose";
import ContactSchema from "../Schema/ContactSchema.js";

const uptr = express.Router()

uptr.post("/update", (req, res) => {
    const model = mongoose.model('data', ContactSchema);
    model.findOneAndUpdate({ email: req.body.oemail }, { email: req.body.nemail }, { new: true })
        .then((updatedData) => {
            if (updatedData) {
                res.status(200).send('Data updated successfully');
            } else {
                res.status(404).send('Data not found');
            }
        })
        .catch((err) => {
            res.status(500).send('Error while updating data');
        });
});

export default uptr;
