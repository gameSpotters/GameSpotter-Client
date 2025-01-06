import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import GameDashBoard from './GameSpotter/GameMart/GameDashBoard/GameDashBoard';
import UserLibrary from './GameSpotter/Profile/UserLibrary/UserLibrary';
import UserSettings from './GameSpotter/Profile/UserSettings/UserSettings';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import SingleGame from './GameSpotter/Game/SingleGame/SingleGame';
import GameReview from './GameSpotter/GameReview/GameReview';
import SingleGameReview from "./GameSpotter/SingleGameReview/SingleGameReview"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/gameMart'
          element={
            <ProtectedRoute>
              <GameDashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/userLibrary'
          element={
            <ProtectedRoute>
              <UserLibrary />
            </ProtectedRoute>
          }
        />
        <Route
          path='/userSettings'
          element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path='/gameReview'
          element={
            <ProtectedRoute>
              <GameReview />
            </ProtectedRoute>
          }
        />
        <Route path='/singleGame/:id' element={<ProtectedRoute><SingleGame/></ProtectedRoute>}/>
        <Route path='/singleGameReview/:id' element={<ProtectedRoute><SingleGameReview/></ProtectedRoute>}/>
        <Route path='*' element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
