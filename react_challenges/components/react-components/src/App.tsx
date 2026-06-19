import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardComponent from "./Components/CardComponent/CardComponent/CardComponent";
import CardComponentPracticeCopy from "./Components/CardComponentPracticeCopy/CardComponentPracticeCopy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/card-component" replace />} />
        <Route
          path="/card-component"
          element={<CardComponent name={""} age={0} img={""} likes={[]} />}
        />
        <Route
          path="/card-component-practice"
          element={
            <CardComponentPracticeCopy name={""} age={0} img={""} likes={[]} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
