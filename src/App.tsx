import Header from "./components/header/Navigation";
import Slider from "./components/Crousel";
import Textdata from "./components/Content";


function App() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col lg:flex-row">
      <Textdata/>
      <Slider/>
    </div>
    </div>
  );
}

export default App;
