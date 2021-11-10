import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

//jsx - js xml 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>daheckk</code> dafaakk. -raymmarttt
        </p>
    
        <Greet name= "Peter" heroName= "Spider Man">
           <Message/>
        </Greet>
        <Greet name= "Tony" heroName= "Iron Man"/>
           <Button/>
        <Greet name= "Thor" heroName= "Thor"/>
        <Greet name= "Natasha" heroName= "Black Widow"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 