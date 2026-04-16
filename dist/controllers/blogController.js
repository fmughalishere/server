import Blog from '../models/Blog.js';
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching blogs" });
    }
};
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog)
            return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching blog" });
    }
};
export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating blog" });
    }
};
//# sourceMappingURL=blogController.js.map