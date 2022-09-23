const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
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
    },
    posts:[{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, { timestamps: true });

// //validator to check password and confirmpasswword
// UserSchema.pre('validate', function(next){
//     if(this.password !== this.get('confirmPassword')){
//         this.invalidate('confirmPassword', 'Password must match confirm password')
//     }
//     next()
// })

// //saving password hash with bcrypt
// UserSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//         this.password = hash;
//         next();
//         });
// });

module.exports.User = mongoose.model('User', UserSchema);

