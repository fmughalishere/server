import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema({
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyLogo: { type: String },
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    companyEmail: { type: String, required: true },
    companyAddress: { type: String, required: true },
    designation: { type: String, required: true },
    phone: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    education: { type: String, required: true },
    city: { type: String, required: true },
    salary: { type: String },
    experience: { type: String },
    status: { type: String, enum: ['active', 'closed'], default: 'active' },
    type: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'One-Day Task', 'Remote-Job', 'Home-Based', 'Contract-Based'],
        default: 'Full-time'
    },
    skills: [String],
});
export default mongoose.model('Job', jobSchema);
//# sourceMappingURL=Job.js.map