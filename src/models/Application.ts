import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  companyName: { type: String },
  designation: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  isCurrentJob: { type: Boolean, default: false }
});

const applicationSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: false }, 
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fullName: { type: String, required: true },
  image: { type: String },
  dob: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Male' },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  whatsapp: { type: String, required: true },
  country: { type: String, default: 'Pakistan' },
  city: { type: String, required: true },
  category: { type: String, required: true },
  jobtype: { type: String, default: 'Full-Time' }, 
  education: { type: String },
  skills: [{ type: String }],
  achievements: { type: String },
  isFresher: { type: Boolean, default: false },
  yearsOfExperience: { type: Number },
  experience: [experienceSchema],
    status: {
    type: String,
    enum: ['pending', 'shortlisted', 'rejected', 'interviewing', 'Offered'],
    default: 'pending'
  }
}, { timestamps: true });

export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);