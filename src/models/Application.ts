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
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  image: { type: String },
  fullName: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  country: { type: String, default: 'Pakistan' },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  phonePrivacy: { type: String, enum: ['Public', 'Private'], default: 'Private' },
  email: { type: String, required: true },
  emailPrivacy: { type: String, enum: ['Public', 'Private'], default: 'Private' },
  whatsapp: { type: String },
  whatsappPrivacy: { type: String, enum: ['Public', 'Private'], default: 'Private' },
  category: { type: String, required: true },
  jobtype: { type: String, default: 'Full-Time' },
  education: { type: String },
  isFresher: { type: Boolean, default: false },
  experience: [experienceSchema],
  achievements: { type: String },
  resume: { type: String },      
  coverLetter: { type: String },
  status: {
    type: String,
    enum: ['pending', 'shortlisted', 'rejected', 'interviewing'],
    default: 'pending'
  }
}, { timestamps: true });

export const Application = mongoose.model('Application', applicationSchema);