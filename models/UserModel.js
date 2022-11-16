const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { 
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String,
    required: true,
  },
  role: String,
  isActive: Boolean,
},
{
  timestamps: true,
  versionKey: false,
}
)

module.exports = mongoose.model('users', userSchema);