import './App.css';
import NavBarEcomerce from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return (
    <>
    <NavBarEcomerce/>
    <ItemListContainer greeting={"Hola Bienvenidos a Sala Motors"}/>
    </>
  );
}

export default App;
