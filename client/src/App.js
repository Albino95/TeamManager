import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPlayer from './components/AddPlayer';
import AllTeams from './components/AllTeams';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  exact path = "/" default element={<AllTeams />} />
        <Route  exact path = "/new" element = {<AddPlayer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
