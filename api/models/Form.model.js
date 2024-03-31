import mongoose from 'mongoose';


const FormSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  phone: {
    type: Number, 
    required: true
  },
  type: {
    type: String, 
    required: true
  },
  image: {
   type:[ String],
   required: true
  },
  Description: {
    type: String,
    required:true
  }
});


const Form = mongoose.model('Form', FormSchema);

export default  Form;