import Contact from '../models/contact.model.js'

export const message = async (req, res, next)=>{
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).json("Message sent successfully!")
    } catch (error) {
        next(error)
    }
}