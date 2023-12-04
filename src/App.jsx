import React from "react";
import Header from "./components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Archive from "./pages/Archive";
import Add from "./pages/Add";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/notes/:id" element={<Detail />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/notes/new" element={<Add />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
