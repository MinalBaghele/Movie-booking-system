const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: String,
    genre: String,
    showtimes: [String]
}));

const Booking = mongoose.model('Booking', new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    movieId: mongoose.Schema.Types.ObjectId,
    seats: [String],
    showtime: String
}));

// Endpoint to get movies
app.get('/movies', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// Endpoint to book tickets
app.post('/book', async (req, res) => {
    const { userId, movieId, seats, showtime } = req.body;
    const booking = new Booking({ userId, movieId, seats, showtime });
    await booking.save();
    res.sendStatus(201);
});
