import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: false }, 
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: String },
  city: { type: String, required: true },
  category: { type: String, required: true },
  jobtype: { type: String },
  gender: { type: String },
  maritalStatus: { type: String },
  education: { type: String },
  experience: { type: String },
  image: { type: String }, 
  status: {
    type: String,
    enum: ['pending', 'shortlisted', 'rejected', 'interviewing'],
    default: 'pending'
  }
}, { timestamps: true });

export const Application = mongoose.model('Application', applicationSchema);