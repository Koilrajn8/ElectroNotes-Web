
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Transformers from "./pages/Transformers";
import Motors from "./pages/Motors";
import Lesson from "./pages/Lesson";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="layout">
        <Sidebar searchQuery={searchQuery} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transformers" element={<Transformers />} />
            <Route path="/motors" element={<Motors />} />
            <Route path="/learn/:topicId" element={<Lesson />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
