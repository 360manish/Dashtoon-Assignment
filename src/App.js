import logo from './logo.svg';
import './App.css';
import ComicForm from './components/formComponent';
import Body from './components/body';
import ComicStrip from './components/comicStrip';
import bgImage from "./Assets/bg-image.webp"
import ComicState from './Context/comicState';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <ComicState>
      {/* <div className="App bg-slate-800 bg-cover bg-center h-screen bg-repeat-x" style={{ backgroundImage: `url(${bgImage})`}}> */}
      <div className="App bg-slate-800">
        <Toaster />
        <ComicForm/>
        <ComicStrip/>
        <Body/>
      </div>
    </ComicState>
  );
}

export default App;
