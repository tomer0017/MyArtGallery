import { useEffect, useState } from 'react'
import './App.css'
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose a theme
import 'primereact/resources/primereact.min.css';                 // Core CSS
import 'primeicons/primeicons.css';                              // Icons
import ArtistPage from './components/ArtistPage';



function App() {
  const [paintings, setPaintings] = useState([]);
  const [sofas, setSofas] = useState([]);
  const [links, setLinks] = useState([]);
  const artist_pic = "http://www.uploads.co.il/uploads/images/973892682.png";
  
  useEffect(() => {
    fetch("/paintings.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPaintings(data);
        console.log("Fetched data:", data); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/sofas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSofas(data);
        console.log("Fetched data:", data); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLinks(data);
        console.log("Fetched data:", data); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div>
      {paintings.length > 0 && (
        <ArtistPage
          links={links}
          artistPic={artist_pic}
          sofas={sofas}
          paintings={paintings}
        />
      )}
    </div>
  );
}

export default App
