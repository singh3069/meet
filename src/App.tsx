import Header from "./components/header/header";
import Slider from "./components/slider";
import Textdata from "./components/textdata";


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
