import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [clickedCard, setClickCard] = useState();
  const [cards, setCards] = useState([]);
  const [matchCards, setMatchCards] = useState([]);


  const emojiList = ["🦜", "🍎", "🌻", "🚗", "🧭", "🐘"];

  useEffect(() => {
    //suffle card logic so every time cards position changes
    const shuffle = (arr) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    const doubleEmojiList = emojiList.concat(emojiList);
    const shuffleCards = shuffle(doubleEmojiList);
    setCards(shuffleCards);
  }, [])



  const handleClick = (index) => {
    setClickCard(cards[index]);

    if(matchCards.length === 0){
       setMatchCards(clickedCard);
    }else{
      setMatchCards((prev) => [...prev, clickedCard])
    }

    console.log(matchCards);
  }


  return (
    <>
      <h1>Memory Card Game {clickedCard} </h1>
      <div className='memory-card-game'>
        {cards.map((image, index) => (
          <div
            className="memory card"
            key={index}
            onClick={() => handleClick(index)}
          >
            {image}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
