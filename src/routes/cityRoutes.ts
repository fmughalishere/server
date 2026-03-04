import express from 'express';
import { getAllCities, seedCities } from '../controllers/cityController.js';
const router = express.Router();

router.get('/', getAllCities);
router.post('/seed', seedCities);
export default router;