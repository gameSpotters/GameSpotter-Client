import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './MakeComment.css';

const MakeComment = ({ closeModal, id }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const getToken = () => {
        return localStorage.getItem('token'); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!rating) {
            toast.error("Please provide a star rating.");
            return;
        }

        if (!id) {
            toast.error("Game ID is missing.");
            return;
        }

        const reviewData = {
            rating,
            message,
        };

        const token = getToken(); 

        try {
            setLoading(true);
            const response = await axios.post(
                `https://gamedata-h9h3.onrender.com/api/reviews/${id}`,
                reviewData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data); 
            toast.success("Review submitted successfully!");
            closeModal();
        } catch (error) {
            console.error('Error submitting the review:', error);
            if (error.response && error.response.status === 401) {
                toast.error("You must be logged in to submit a review.");
            } else {
                toast.error("An error occurred while submitting the review.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='makeComment-modal'>
            <div className='makeComment-content'>
                <div className="review-container">
                    <h1 className="review-title">Add a new review</h1>
                    <form id="review-form" onSubmit={handleSubmit}>
                        <div className="rating">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <label key={starValue}>
                                        <FaStar
                                            className="star"
                                            size={25}
                                            color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            onClick={() => setRating(starValue)}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            className="input-field"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit review'}
                        </button>
                    </form>
                </div>
                <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
            <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
        </div>
    );
};

export default MakeComment;
