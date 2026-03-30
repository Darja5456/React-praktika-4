import CharacterCard from '../components/CharacterCard/CharacterCard';
import { useState } from 'react';
import data from '../data/characters';

function Practice2() {
  const [characters] = useState(data);

  return (
    <div className="catalog">
      <div className="cards">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            props={character}
            showActions={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Practice2;