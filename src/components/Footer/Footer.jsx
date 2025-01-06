import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
            <hr className='footer-hr' />
            <div className='Footer-content'>
                <div className='Footer-Content-One'>
                    <h2 className='Footers'>Game<span className="footer">S</span>potter Team</h2>
                    <p>Join millions of gamers  <br /> and developers in different countries and  <br /> start exploring super and awesome <br /> games and update today.</p>
                </div>

                <div className='Footer-Content-One'>
                    <h2>Developers</h2>
                    <h3>Game Dev.</h3>
                    <h3>Game Tester</h3>
                    <h3>Game Enthusiast</h3>
                </div>

                <div className='Footer-Content-One'>
                    <h2>Community</h2>
                    <h3>X</h3>
                    <h3>Telegram</h3>
                    <h3>Discord</h3>
                    <h3>GameSpotter</h3>
                </div>

                <div className='Footer-Content-One'>
                    <h2>Resources</h2>
                    <h3>Blog</h3>
                    <h3>Support</h3>
                    <h3>Adventure</h3>
                </div>

                <div className='Footer-Content-One'>
                    <h2>Have a problem</h2>
                    <p>Have a question? Drop us an email, and <br /> we’ll get back to you as soon as possible...</p>
                    <h4>gamesspotters@gmail.com</h4>
                </div>
            </div>
            <div className="footer-gameSeries">
                <button>ARCHADE</button>
                <button>3D GAME</button>
                <button>DEVELOPERS</button>
                <button>UNITY</button>
                <button>ACTION</button>
                <button>SIMULATION</button>
                <button>FIGHT</button>
                <button>ADVENTURE</button>
            </div>
        </div>
    )
}

export default Footer