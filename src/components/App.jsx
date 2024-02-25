import { useEffect, useState } from "react";
import "../styles/App.css";
import CardField from "./CardField";
import Header from "./Header";

export default function App() {
  const [artist, setArtist] = useState("Dreamcatcher");
  const [cardData, setCardData] = useState([]);

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
        albums.forEach((album) => {
          data.push({
            name: album.name,
            url: album.image[1]["#text"],
            clicked: false,
          });
        });

        setCardData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [artist]);

  console.log(cardData);

  return (
    <>
      <Header setArtist={setArtist} />
      <CardField />
    </>
  );
}
