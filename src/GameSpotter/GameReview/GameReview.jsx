import React, { useEffect, useState } from 'react';
import "./GameReview.css"
import UserNav from '../../components/Navbar/UserNav'
import { IoStarOutline } from "react-icons/io5";
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { fetchGames } from '../../api/game';
import gameLoading from "../../assets/gads.gif"
import soon from "../../assets/soon.avif"

const GameReview = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gamesData = await fetchGames();
                setGames(gamesData);
            } catch (error) {
                console.error('Error fetching games:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const truncateDescription = (description) => {
        return description.length > 50 ? `${description.slice(0, 50)}...` : description;
    };

    // Filter games based on the search query
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='GameReview-Container'>
            <div className='GameReview'>
                <UserNav />
                <div className='--GameReview-content'>
                    <hr />
                    <h1>See Unlimited Games</h1>
                    <h2>Review</h2>
                </div>
            </div>
            <div className='--GameReview-information'>
                <h3>Gaming Partners</h3>
                <div class="--GameReview-slider">
                    <div class="--GameReview-slide-track">
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="s--GameReview-lide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-lide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                        <div class="--GameReview-slide">
                            <img src={soon} height="100" width="250" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='--GameReview-check'>
                <div className='--GameReview-firstSection'>
                    <h2>Games</h2>
                    <input 
                        type="text" 
                        placeholder='Search for games' 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                </div>
                {/* <div className='--GameReview-secondSection'>
                    <h2>Release</h2>
                    <h2 className='--GameReview-select'>
                        <select name="" id="">
                            <option value="1">Select</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                            <option value="5">Option 4</option>
                            <option value="6">Option 5</option>
                        </select>
                    </h2>
                </div> */}
            </div>
            <div className='GameReview-new-release'>
                <h1>RECENT RELEASE</h1>
                <div className='--GameReview-Release'>
                    {loading ? (
                        <div className='GameReview-games-loading'>
                            <img src={gameLoading} alt="" />
                        </div>
                    ) : filteredGames.length > 0 ? (
                        filteredGames.map((game) => (
                            <div className='iytr' key={game._id}>
                                <div className='--GameReview-Release-content'>
                                    <Link to={`/singleGameReview/${game._id}`}>
                                        <img src={game.image} alt={game.title} />
                                    </Link>
                                    <div className='GameReview-inView'>
                                        <h2>{game.title}</h2>
                                        <p>{truncateDescription(game.description)}</p>
                                        <div className='--GameReview-header-icons'>
                                            <div>
                                                <IoStarOutline />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                            <div>{game.rating}</div>
                                        </div>
                                        <hr />
                                        <h2>Rating & Review</h2>
                                        <p className='--GameReview-name'>See More Game Review</p>
                                        <Link to={`/singleGameReview/${game._id}`}>
                                            <p><span>View Comment</span></p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='MainDashBoard-games-empty'>
                            No games found
                        </div>
                    )}
                </div>

                <div className='--GameReview-general'>
                    <h1>Discover Millions of Recommended Games</h1>
                    <p>With Us</p>
                    <div className='--GameReview-Recommended'>
                        <div className='--GameReview-Recommended-First'>
                            <div className='--GameReview-illustrate'>
                                <h3>Gamers Pride</h3>
                                <ul>
                                    <li>Adventure</li>
                                    <li>Strategy</li>
                                    <li>Simulation</li>
                                    <li>Racing</li>
                                    <li>Action</li>
                                    <li>Sports</li>
                                    <li>Role-Playing</li>
                                    <li>Puzzle</li>
                                    <li>Educational</li>
                                    <li>Archade</li>
                                    {/* <div className='--GameReview-Recommended-button'>
                                        <button>Hello</button>
                                        <button>Hello</button>
                                        <button>Hello</button>
                                        <button>Hello</button>
                                        <button>Hello</button>
                                    </div> */}
                                </ul>
                            </div>
                            <div className='--GameReview-Images-Gif'>
                                <img src="https://i.gifer.com/CDGN.gif" alt="" />
                            </div>
                            <div className='--GameReview-Images-Gif'>
                                <img src="https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='--GameReview-Images-Gif'>
                                <img src="https://i.gifer.com/origin/63/637e0d7bae6f392e939a90586eb4aa6f_w200.gif" alt="" />
                            </div>
                            <div className='--GameReview-Images-Gif'>
                                <img src="https://cdn.pixabay.com/animation/2024/09/13/23/17/23-17-05-628__480.png" alt="" />
                            </div>
                        </div>
                        <div className='--GameReview-Recommended-Second'>
                            <h2>Who Are <br /> You</h2>
                            <div className='--GameReview-gamers-first'>
                                <h2>GAMER</h2>
                            </div>
                            <div className='--GameReview-gamers-second'>
                                <h2>TESTER</h2>
                            </div>
                            <div className='--GameReview-gamers-third'>
                                <h2>DEVELOPER</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default GameReview;
