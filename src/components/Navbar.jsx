
import { Search, Zap } from "lucide-react";

function Navbar({ searchQuery, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <Zap size={24} />
        <h2>ElectroNotes</h2>
      </div>

      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search electrical topics..."
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
