const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
// const bcrypt = require('bcrypt');
>>>>>>> e5d882b28328483f3468720bc2d754ac8efd386a

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

//validator to check password and confirmpasswword
UserSchema.pre('validate', function(next){
    if(this.password !== this.get('confirmPassword')){
        this.invalidate('confirmPassword', 'Password must match confirm password')
    }
    next()
})

//saving password hash with bcrypt
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});

module.exports.User = mongoose.model('User', UserSchema);

