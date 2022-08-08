import Cases from "./components/Cases";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter basename="/testapp">
      <Routes>
        <Route path="/" element={<Cases />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
