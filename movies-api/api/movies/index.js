import express from 'express';
import asyncHandler from 'express-async-handler';
import { 
    getMovies,
    getMovie,
    getMovieImages,
    getMovieReviews,
    getUpcomingMovies,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovieCredits,
    getMovieRecommendations
} from '../tmdb-api'; 


const router = express.Router();

// Static routes
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcoming = await getUpcomingMovies();
    res.status(200).json(upcoming);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getNowPlayingMovies();
    res.status(200).json(nowPlaying);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popular = await getPopularMovies();
    res.status(200).json(popular);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
    const topRated = await getTopRatedMovies();
    res.status(200).json(topRated);
}));

// Dynamic routes
router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages(id);
    res.status(200).json(images);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
}));

router.get('/:id/credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const credits = await getMovieCredits(id);
    res.status(200).json(credits);
}));

router.get('/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recommendations = await getMovieRecommendations(id);
    res.status(200).json(recommendations);
}));

export default router;
