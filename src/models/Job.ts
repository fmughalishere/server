import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  title: { type: String, required: true },
  company: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  salary: { type: String },
  experience: { type: String },
  deadline: { type: Date },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  type: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Remote', 'Contract', 'Internship'], 
    default: 'Full-time' 
  },
  skills: [String],
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);