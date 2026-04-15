import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['jobseeker', 'employer'],
        default: 'jobseeker'
    },
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    profile: {
        resume: { type: String, default: null },
        bio: { type: String, default: null },
        city: { type: String, default: null },
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=User.js.map