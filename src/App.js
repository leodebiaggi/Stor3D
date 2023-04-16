import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SliderContainer from './components/SliderContainer/SliderContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Stor3D'} />
      <SliderContainer />
    </div>
  );
}

export default App;
