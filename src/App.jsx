import logo from "./logo.svg";
import "./App.css";
import { NewsCard } from "./components/newsCard";
import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
