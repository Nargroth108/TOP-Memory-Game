import { useEffect, useState } from "react";
import "../styles/App.css";
import CardField from "./CardField";
import Header from "./Header";

export default function App() {
  const [artist, setArtist] = useState("Dreamcatcher");
  const [cardData, setCardData] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[i].id = i;
      array[j] = temp;
      array[j].id = j;
    }
  }

  function changeCardClickedValue(card) {
    if (card.clicked === false) {
      const newCardData = cardData.map((item, index) => {
        if (index === card.id) {
          item.clicked = true;
          return item;
        } else {
          return item;
        }
      });

      shuffleArray(newCardData);
      setCardData(newCardData);
    } else {
      const newCardData = cardData.map((item) => {
        item.clicked = false;
        return item;
      });

      shuffleArray(newCardData);
      setCardData(newCardData);
    }
  }

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=bbcc545698a179be8fefc4ef44ce2c0d&limit=12&format=json`,
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const data = [];
        const albums = response.topalbums.album;
        let id = 0;
        albums.forEach((album) => {
          data.push({
            name: album.name,
            url: album.image[3]["#text"],
            clicked: false,
            id: id,
          });
          id += 1;
        });

        shuffleArray(data);

        setCardData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setCardData([]);
    };
  }, [artist]);

  console.log(cardData);

  return (
    <>
      <Header setArtist={setArtist} cardData={cardData} />
      <CardField
        key={"cardField"}
        cardData={cardData}
        changeCardClickedValue={changeCardClickedValue}
      />
    </>
  );
}
