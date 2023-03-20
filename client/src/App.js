import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from "react-router-dom";

import { Context } from './contexts/Context';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { About } from './components/About';
//import { Main } from './components/Main';
import { MainNew } from './components/MainNew';

function App() {
  //const navigate = useNavigate();
  const contextValue = {}; 

  return (
        <Context.Provider value={contextValue}> 
            <div className="App">
                    <Navigation />
                        <main className='main'>
                            <Routes>
                                <Route path='/' element = { <MainNew /> }/>
                                <Route path='/about' element = { <About /> }/>
                            </Routes>
                        </main>
                    <Footer />
            </div>
        </Context.Provider>  
    );
}

export default App;
