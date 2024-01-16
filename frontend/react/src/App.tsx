import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from "./Components/Movies";
import MoviePage from './Components/MoviePage';

function App () {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
      </Routes>
    </Router>


  );
}

export default App;