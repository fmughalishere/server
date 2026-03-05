import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  category: { type: String, default: 'Career Advice' },
  author: { type: String, default: 'EasyJobs Admin' }
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);