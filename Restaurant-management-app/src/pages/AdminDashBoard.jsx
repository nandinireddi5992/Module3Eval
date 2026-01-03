// AdminDashboard.jsx
import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/storageUtils.js";
import {Navbar} from "../components/Navbar.jsx";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterParking, setFilterParking] = useState("");

  useEffect(() => {
    setData(getRestaurants());
  }, []);

  const filtered = data.filter(r => {
    const matchesSearch = r.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType ? r.type === filterType : true;
    const matchesParking = filterParking ? r.parkingLot === (filterParking === "true") : true;
    return matchesSearch && matchesType && matchesParking;
  });

  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterParking={filterParking}
        setFilterParking={setFilterParking}
      />
      <div className="grid">
        {filtered.map(r => (
          <div key={r.restaurantID}>
            <h3>{r.restaurantName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
