import express from 'express';
import asyncHandler from 'express-async-handler';
import { 
    getPersonDetails,
    getPersonMovieCredits
} from '../tmdb-api'; 


const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const personDetails = await getPersonDetails(id);
    res.status(200).json(personDetails);
}));

router.get('/:id/movie_credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieCredits = await getPersonMovieCredits(id);
    res.status(200).json(movieCredits);
}));

export default router;
