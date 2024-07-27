import mongoose from 'mongoose';

const { model, models, Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (pass) {
          // Custom validator function
          return pass.length >= 5;
        },
        message: 'Password must be at least 5 characters long',
      },
    },
  },
  { timestamps: true }
);
UserSchema.post('validate',function(user){
  const nothashPassword = user.password;
  var salt = bcrypt.genSaltSync(10);
 user.password = bcrypt.hashSync(nothashPassword, salt);
 
})

export const User = models.User || model('User', UserSchema);
