import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./SingleGameReview.css";
import { FaStar } from 'react-icons/fa';
import UserNav from '../../components/Navbar/UserNav';
import Footer from '../../components/Footer/Footer';
import MakeComment from '../MakeComment/MakeComment';
import { getSingleGame } from "../../api/getSingleGame";
import { getGameReviews } from "../../api/getGameReviews";
import DefaultImage from "../../assets/DefaultImage.webp";

const SingleGameReview = () => {
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [singleGame, setSingleGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [avatars, setAvatars] = useState({});
    const { id } = useParams();
    const sliderRef = useRef(null);

    const handleMakeCommentClick = () => {
        setShowCommentModal(true);
    };

    const closeCommentModal = () => {
        setShowCommentModal(false);
    };

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await getSingleGame(id);
                setSingleGame(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadProfile();
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const fetchedReviews = await getGameReviews(id);
                setReviews(fetchedReviews);

                const newAvatars = {};
                const promises = fetchedReviews.map(async (review) => {
                    if (!review.owner?.image) {
                        const avatarResponse = await fetch(`https://api.multiavatar.com/Binx.png${review.owner.username}`);
                        const avatarSvg = await avatarResponse.text();
                        newAvatars[review.owner.username] = avatarSvg;
                    }
                });

                await Promise.all(promises);
                setAvatars(newAvatars);
            } catch (error) {
                console.error("Error fetching game reviews:", error);
                setError(error.message);
            }
        };

        if (singleGame) {
            fetchReviews();
        }
    }, [id, singleGame]);

    const handleNext = () => {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };

    const handlePrev = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };

    if (loading) return (
        <div className="SingleGameReview-spinner-container">
            <div className="SingleGameReview-spinner"></div>
            <div className="SingleGameReview-spinner-inner"></div>
            <div className="SingleGameReview-text">Loading...</div>
        </div>
    );

    if (error) return <p>Error: {error}</p>;

    return (
        <div className='SingleGameReview'>
            <UserNav />
            <div className='--SingleGameReview-header'>
                <h3 className='SingleGameReview-welcome'>Get full information about your favourite game Today!!!</h3>
                <div className='--SingleGameReview-First-Info'>
                    <div className='--SingleGameReview-First-Info-Content'>
                        {singleGame?.gameVideoAds ? (
                            <video className='--SingleGameReview-First-Info-img' autoPlay controls onEnded={(e) => e.target.play()}>
                                <source src={singleGame.gameVideoAds} type="video/mp4" />
                            </video>
                        ) : (
                            <video className='--GameRight-header-img' controls autoPlay onEnded={(e) => e.target.play()}></video>
                        )}
                        <h2>More Screenshots</h2>
                        <div className='--SingleGameReview-First-Info-Content-ctn' ref={sliderRef}>
                            <img className="Screenshot-one" src={singleGame?.additionalGameOne} alt="Screenshot 1" />
                            <img className="Screenshot-two" src={singleGame?.additionalGameTwo} alt="Screenshot 2" />
                            <img className="Screenshot-thre" src={singleGame?.image} alt="Main Game" />
                        </div>

                        <div className="slider-controls">
                            <button onClick={handlePrev}>Prev</button>
                            <button onClick={handleNext}>Next</button>
                        </div>
                        <hr />
                    </div>
                    <div className='--SingleGameReview-Sub-First'>
                        <h2>{singleGame?.title}</h2>
                        <h1>
                            {[...Array(5)].map((_, index) => {
                                // Calculate the highest rating from reviews
                                const highestRating = reviews.length > 0 ? Math.max(...reviews.map(review => review.rating || 0)) : 0;
                                return (
                                    <FaStar key={index} color={index < highestRating ? 'yellow' : 'grey'} />
                                );
                            })}
                        </h1>

                        <p className='SingleGameReview-p'>{singleGame?.description}</p>
                        <h3>
                            Publish Date: <span>
                                {singleGame?.publishDate
                                    ? new Date(singleGame.publishDate).toLocaleDateString('en-CA') // Format to YYYY-MM-DD
                                    : 'Not Available'}
                            </span>
                        </h3>
                        <p>
                            Rating: {reviews.length > 0
                                ? (reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length).toFixed(1)
                                : 'N/A'}/5
                        </p>


                        <h4>GameSpotter (Authorize)</h4>

                        <hr />

                        <div className='--SingleGameReview-Developer'>
                            <h2>Developer</h2>
                            <div className='--SingleGameReview-Developer-section'>
                                {singleGame?.owner?.image ? (
                                    <img src={singleGame.owner.image} alt={singleGame.owner.username} />
                                ) : (
                                    <img src={DefaultImage} alt="Developer" />
                                )}
                                <h3>{singleGame?.owner?.username || 'Unknown Developer'}</h3>
                            </div>
                        </div>

                        <hr />
                    </div>
                </div>

                <div className='--SingleGameReview-Dev-Input'>
                    <h2>Developer Additional Input</h2>
                    <p>{singleGame?.additionalInput || "No additional input provided by the developer."}</p>
                </div>

                <div className='SingleGameReview-RatingReview'>
                    <h3>Rating & Review</h3>
                </div>

                <div className='--SingleGameReview-rating-review-ends'>
                    <h1>{reviews.length > 0
                        ? (reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length).toFixed(1)
                        : 'N/A'}%</h1>
                    <div className='asaasa'>
                        <hr className='one' />
                        <hr className='two' />
                        <hr className='three' />
                        <hr className='four' />
                        <hr className='five' />
                    </div>
                </div>

                <section id="testimonials">
                    <div className="testimonial-heading">
                        <div>
                            <span>Comments</span>
                            <h4>Clients Says</h4>
                        </div>
                        <div className='testimonial-heading-btn'>
                            <button onClick={handleMakeCommentClick}>Make a comment</button>
                        </div>
                    </div>

                    <div className="testimonial-box-container">
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div className="testimonial-box" key={review._id}>
                                    <div className="box-top">
                                        <div className="profile">
                                            <div className="profile-img">
                                                {review.owner?.image ? (
                                                    <img src={review.owner.image} alt={review.owner.username} />
                                                ) : (
                                                    <div dangerouslySetInnerHTML={{ __html: avatars[review.owner.username] }} />
                                                )}
                                            </div>
                                            <div className="name-user">
                                                <strong>{review.owner.username || 'Unknown User'}</strong>
                                                <span>@{review.owner.username}</span>
                                            </div>
                                        </div>
                                        <div className="reviews">
                                            {[...Array(5)].map((_, index) => (
                                                <FaStar key={index} color={index < review.rating ? 'yellow' : 'grey'} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="client-comment">
                                        <p>{review?.message}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </div>
                </section>
            </div>

            {showCommentModal && <MakeComment closeModal={closeCommentModal} id={id} />}
            <Footer />
        </div>
    );
};

export default SingleGameReview;
