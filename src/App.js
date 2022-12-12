import React from 'react';
import './App.css';
import HomeHeader from './components/HomeHeader';
import HList from './components/HList';
import Tile from './components/Tile';
// simulating data from api calls
import sectors from './demoData';

function App() {
  const sectorTiles = sectors.map(data => {
    return (
      <Tile
        key={data.id}
        image={data.image}
        title={data.title}
        description={data.description}
        link={data.link} />
    );
  });

  return (
    <div className="App">
      <HomeHeader />
      <main>
        <HList title="Explore Professions" list={sectorTiles}/>
      </main>
    </div>
  );
}

export default App;
