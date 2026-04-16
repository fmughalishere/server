import mongoose from 'mongoose';
const citySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "Explore top opportunities in this city." },
    jobCount: { type: Number, default: 0 }
}, { timestamps: true });
export const City = mongoose.model('City', citySchema);
//# sourceMappingURL=City.js.map