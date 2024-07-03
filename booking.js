import React, { useState } from 'react';
import axios from 'axios';

function Booking({ movieId, showtime }) {
    const [seats, setSeats] = useState([]);

    const handleBook = async () => {
        const token = localStorage.getItem('token');
        const { userId } = JSON.parse(atob(token.split('.')[1]));
        await axios.post('http://localhost:5000/book', { userId, movieId, seats, showtime });
        alert('Booking successful');
    };

    return (
        <div>
            <h3>Select Seats</h3>
            {/* Add seat selection logic here */}
            <button onClick={handleBook}>Book</button>
        </div>
    );
}

export default Booking;
