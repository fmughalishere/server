import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  googleId: { type: String },
  avatar: { type: String },
  role: { 
    type: String,
    enum: ['user', 'employer', 'cheifAdmin', 'subAdmin'],
    default: 'user' 
  },
  isApproved: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },

  phone: { type: String },
  website: { type: String },
  location: { type: String },
  lat: { type: Number },
  lng: { type: Number },

  city: { type: String },
  industry: { type: String },
  companySize: { type: String },
  description: { type: String },
  contactPerson: { type: String },
  designation: { type: String },
  logo: { type: String },

  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],

  profile: {
    resume: { type: String, default: null },
    bio: { type: String, default: null },
    city: { type: String, default: null },
    experience: { type: String },
    skills: [{ type: String }],
  }

}, { timestamps: true });

userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);
export default User;