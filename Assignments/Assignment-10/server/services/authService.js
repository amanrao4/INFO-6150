const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.authenticateUser = async(username, password)=>{
    try{

        const user = await User.findOne({email:username})

        if(!user){
            console.log('User not found')
            return{success:false, message:"User not found", user:null}
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            console.log('Incorrect password')
            return {success:false, message:'Incorrect password', user:null}
        }

        return {success:true, message:'Authentication successful', user:{ fullName:user.fullName, email:user.email, type:user.type}}

    }catch(error){
        return {success:false, message:'An Error occurred during authentication', user:null}
    }
}