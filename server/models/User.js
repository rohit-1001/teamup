const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    interests:[
        {
            type: String
        }
    ],
    appliedposts:[
        {
            type: String
        }
    ],
    tokens: [
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.cpassword, 10);
    }
    next();
})

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({email: this.email}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;
