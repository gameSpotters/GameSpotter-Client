import React from 'react'
import "./GameDashBoard.css"
import SideDashBoard from '../SideDashBoard/SideDashBoard'
import MainDashBoard from '../MainDashBoard/MainDashBoard'
import Footer from '../../../components/Footer/Footer'
import UserNav from '../../../components/Navbar/UserNav'

const GameDashBoard = () => {
    return (
        <div className='GameDashBoard-container'>
            <div>
                <UserNav/>
            </div>
            <div className="GameDashBoard">
                <div id="SideDashBoard">
                    <SideDashBoard />
                </div>

                <div id="MainDashBoard">
                    <MainDashBoard />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GameDashBoard