import Header from "./components/header/Header";
import Slider from "./components/Slider";
import Textdata from "./components/Textdata";


function App() {
  return (
    <div>
      <Header/>

    <div className="flex flex-row">
      <Textdata/>
      <Slider/>
    </div>
    </div>
  );
}

export default App;
