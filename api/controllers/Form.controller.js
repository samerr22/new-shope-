import Form from "../models/Form.model.js";
import { errorHandle } from "../utils/error.js";



//add form
export const createe = async (req, res, next) => {
   
  
    const {  name,email,phone,type,image,Description } = req.body;
  
    const newForm = new Form({
        name,email,phone,type,image,Description
    });
    try {
      const savedForm = await newForm.save();
      res.status(201).json(savedForm);
    } catch (error) {
      next(error);
    }
  };

  //get all form
  export const getForm = async (req, res, next) => {

    if (!req.user.isAdmin) {
      return next(errorHandle(403, "You are not allowed to delete this shedul"));
    }
  
    
    try {
  
      
  
      const isAdmin = req.user.isAdmin;
  
      if (isAdmin) {
        console.log(isAdmin);
  
        const shadul = await Form.find();
  
        if (shadul.length > 0) {
          res.json({
            message: "shadul details retrieved successfully",
            shadul,
          });
        } else {
          return next(errorHandle(404, " shadul not fonud "));
        }
      }
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };
  

//delete form
  export const deleteForm = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandle(403, "You are not allowed to delete this post"));
    }
    try {
      await Form.findByIdAndDelete(req.params.FormId);
      res.status(200).json("The post has been deleted");
    } catch (error) {
      next(error);
    }
  };