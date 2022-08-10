import Cases from "./components/Cases";
import { Route, Routes, HashRouter } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Cases />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
