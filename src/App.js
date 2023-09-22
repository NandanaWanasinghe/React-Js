
import './App.css';
import Main from './Components/Main';
import { myData } from './Data/myData';
function App() {
  const MainBlock = myData.map(({name,position,city,index}) => {
    return <Main key={index} name={name} position={position} city={city}/>;
  }
)
  return (
    <div className="Main-container">
      <h1>Hello Sri Lanka</h1>
      <div className="MainBlock-container">
        {MainBlock}
      </div>
    </div>
  );
}


export default App;
