import Header from "./components/Header/Header";
import "./App.scss"
import Cards from "./components/Main/Cards";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cards/>
    </div>
  );
}

export default App;
