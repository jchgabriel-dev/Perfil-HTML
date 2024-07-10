import './App.css';
import About from './components/About/About';
import Skills from './components/About/Skills';
import Introduction from './components/Introducion/Introduction';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/ProCards/Footer';
import ProCards from './components/ProCards/ProCards';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='main-total'>
        <Introduction/>
        <br></br>
        <br></br>

        <About/>
        <br></br>
      
        <Skills/>
        <br></br>
        <br></br>
        <ProCards/>    
      </div>
      <Footer/>
    </div>
  );
}

export default App;
