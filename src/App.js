import { BrowserRouter as Router, Routes, Route } from "react-router";

import { Home } from "./assets/pages/home";
import { Login } from "./assets/pages/login";
import { Feed } from "./assets/pages/feed";

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
