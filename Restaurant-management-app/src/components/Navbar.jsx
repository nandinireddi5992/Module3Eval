// Navbar.jsx
import React, { useRef, useEffect } from "react";

function Navbar({ searchTerm, setSearchTerm, filterType, setFilterType, filterParking, setFilterParking }) {
  const inputRef = useRef();
  useEffect(() => { inputRef.current.focus(); }, []);

  return (
    <nav>
      <input
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
      </select>
      <select value={filterParking} onChange={(e) => setFilterParking(e.target.value)}>
        <option value="">All Parking</option>
        <option value="true">With Parking</option>
      </select>
    </nav>
  );
}

export default Navbar;