import Job from '../models/Job.js';
export const postJob = async (req, res) => {
    try {
        const job = await Job.create({ ...req.body, employer: req.user.id });
        res.status(201).json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error posting job' });
    }
};
export const getAllJobs = async (req, res) => {
    try {
        const { city, title } = req.query;
        let query = {};
        if (city)
            query.city = new RegExp(city, 'i');
        if (title)
            query.title = new RegExp(title, 'i');
        const jobs = await Job.find(query).sort({ createdAt: -1 });
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
};
//# sourceMappingURL=jobController.js.map