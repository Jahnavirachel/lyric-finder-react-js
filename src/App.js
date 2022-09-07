import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextAPI from "./Context";
import SongLyrics from "./pages/SongLyrics";
import Home from "./pages/Home";

function App() {
  return (
    <ContextAPI>
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/lyrics/track/:id" element={<SongLyrics />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ContextAPI>
  
  );
}

export default App;
