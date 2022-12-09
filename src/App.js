//import logo from './images/banner2.jpg';
//import images from './images/right-quote.png';
import './App.css';
import FirstImage from './images/banner2.jpg';
import Button from './components/Button/Button'
import SimpleSlider from "./slider/slider";
import {ContactUs} from './pages/contactUs/contactUs';
import {Footer} from './pages/contactUs/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="full-content">
          <img src={FirstImage} className="App-logo" alt="logo" />
          <div className='box-container'>
            <div className='box-top-row'><div className='box-top'></div></div>
            <div className="text">
              <div className='black-text'> FREE TEMPLATE </div>
              <div className='orange-text'> BY FREEHTML5.CO </div>
            </div>
            <div className='box-bottom-row'><div className='box-bottom'></div></div>
            <div className='btn-state'>
              <Button title="WHAT'S NEW" />
              <Button title="COURSES" />
            </div>
          </div>
        </div>
      </header>
      <SimpleSlider />
    </div>
  );
}



export default App;
