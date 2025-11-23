import { HashRouter, Routes, Route } from "react-router";

import { Home } from "./assets/pages/home";
import { Login } from "./assets/pages/login";
import { Feed } from "./assets/pages/feed";
import { Register } from "./assets/pages/register";

function App() {
   return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
