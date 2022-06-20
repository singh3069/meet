import Header from "./components/header/header";
import Slider from "./components/slider";
import TextData from "./components/textdata";


function App() {
  return (
    <div>
      <Header/>

    <div className="flex flex-row">
      <TextData/>
      <Slider/>
    </div>
    </div>
  );
}

export default App;
