const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required: [true, "User Name is required"],
        minlength: [3, "User Name must be at least 3 characters"]
    },
    firstName: { 
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "First Name must be at least 3 characters"]
    },
    lastName: { 
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "Last Name must be at least 3 characters"]
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        validate: {
            validator: val=> /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: { 
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);

