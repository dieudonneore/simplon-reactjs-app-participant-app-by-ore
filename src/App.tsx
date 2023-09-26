import React from 'react';
import '../src/App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import ListeParticipant from './pages/listeParticipant';
import AjoutParticipant from './pages/ajouterParticipant';


function App() {
  return (
    <div className="App">
      <div className='nav'>
        <div className="list"><NavLink to="/">Liste des participants</NavLink></div>
        <div className="ajouter"><NavLink to="/ajouter">Ajouter un participant</NavLink></div>
      </div>
      <div className="route">
        <Routes>
          <Route path="/" element={<ListeParticipant />} />
          <Route path="/list-participant" element={<ListeParticipant />} />
          <Route path="/ajouter" element={<AjoutParticipant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
