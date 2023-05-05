import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import { render } from "@testing-library/react";
import ImageSlide from "./Components/ImageSlide";
import Container from "./Components/Container";
import ItemBand from "./Components/ItemBand";

function App() {
  return (
    <div className="App">
      <Menu />

      <ImageSlide />
      <Container>
        <div className="row ">
          <div className="col-sm-3 offset-sm-2">
            <ItemBand></ItemBand>
          </div>
          <div className="col-sm-3">
            <ItemBand></ItemBand>
          </div>
          <div className="col-sm-3">
            <ItemBand></ItemBand>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
