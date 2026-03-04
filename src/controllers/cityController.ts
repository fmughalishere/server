import { Request, Response } from 'express';
import { City } from '../models/City.js';

export const getAllCities = async (req: Request, res: Response) => {
    try {
        const cities = await City.find().sort({ name: 1 });
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const seedCities = async (req: Request, res: Response) => {
    const dummyCities = [
        { name: "Karachi", description: "The Industrial Hub", jobCount: 4500 },
        { name: "Lahore", description: "Tech & Cultural Capital", jobCount: 3200 },
        { name: "Islamabad", description: "The Corporate Hub", jobCount: 2100 }
    ];
    try {
        await City.insertMany(dummyCities);
        res.status(201).json({ message: "Cities seeded successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error seeding", error });
    }
};