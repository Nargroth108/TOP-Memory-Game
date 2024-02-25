import "../styles/App.css";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}

// let artist = "Dreamcatcher";
//       let album = "Summer Holiday";
//       const img = document.querySelector("img");

//       const getData = () =>
//         fetch(
//           `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=bbcc545698a179be8fefc4ef44ce2c0d&limit=12&format=json`
//         )
//           .then(function (response) {
//             return response.json();
//           })
//           .then(function (response) {
//             const albums = response.topalbums.album;
//             albums.forEach((element) => {
//               const newImg = document.createElement("img");
//               newImg.src = element.image[2]["#text"];
//               BODY.appendChild(newImg);
//             });
//           });

//       getData();

//       const artistInput = document.getElementById("artist");
//       const albumInput = document.getElementById("album");
//       const submitButton = document.getElementById("submit");

//       submitButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         artist = artistInput.value;
//         album = albumInput.value;
//         getData();
//       });
