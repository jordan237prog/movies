import Home from './Pages/Home'
import  Header  from './Components/Header';
import  Footer  from './Components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
