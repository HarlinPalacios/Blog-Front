import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/dashboard/HomePage";
import { PublicationList } from "./components/Publication";
import { PublicationListCom } from "./components/PublicationListCom";
import Filtrar from "./components/Filtrar"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<PublicationList />} />
        <Route path="/publication" element={<PublicationListCom />} />
        <Route path="/filtrar" element={<Filtrar />} />
      </Routes>
    </Router>
  );
}

export default App;