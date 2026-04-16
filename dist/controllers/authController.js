import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({ message: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role });
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: 'Invalid Credentials' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: 'Invalid Credentials' });
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
export const getSavedJobs = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('savedJobs');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user.savedJobs);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching saved jobs" });
    }
};
//# sourceMappingURL=authController.js.map