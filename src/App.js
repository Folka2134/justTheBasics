import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { Todo } from "./components/Todo/Todo";
import { Game } from "./components/Game/Game";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";

import logo from "./images/justTheBasicsSmall.png"

const App = () => {
  return (
    <div>
      <div className='h-14 w-full bg-white border-b-2 truncate'>
        <div className='flex'>
          <Link to="/"><img src={logo} alt="" className='h-14' /></Link>
          <ul className='h-full flex p-2'>
            <Link to="/todo"><li className='p-2 underline'>CRUD-app</li></Link>
            <Link to="/game"><li className='p-2 underline'>React Game</li></Link>
            <Link to="/weather"><li className='p-2 underline'>Api Weather</li></Link>
            <Link to="/news"><li className='p-2 underline'>Api News</li></Link>
          </ul>
        </div>
      </div>
      <div className='h-10 w-full grid bg-white border-b-2 justify-center content-center'><p className='text-sm'>Compilation of basic projects displaying a strong foundation.</p></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/game" element={<Game />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
