// src/pages/CustomerDashboard.jsx
import React, { useState, useEffect } from "react";
import { getRestaurants } from "../utils/storageUtils.js";
import Navbar from "../components/Navbar.jsx";

function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterParking, setFilterParking] = useState("");

  useEffect(() => {
    const data = getRestaurants();
    setRestaurants(data);
  }, []);

  // Apply search and filters
  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch =
      r.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType ? r.type === filterType : true;
    const matchesParking =
      filterParking
        ? r.parkingLot === (filterParking === "true")
        : true;

    return matchesSearch && matchesType && matchesParking;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard</h1>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterParking={filterParking}
        setFilterParking={setFilterParking}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((r) => (
            <div key={r.restaurantID} style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
              <img src={r.image} alt={r.restaurantName} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h3>{r.restaurantName}</h3>
              <p>{r.address}</p>
              <p>Type: {r.type}</p>
              <p>Parking: {r.parkingLot ? "Available" : "Not Available"}</p>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
export default CustomerDashboard;