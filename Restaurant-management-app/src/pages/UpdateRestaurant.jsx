import { getRestaurants, saveRestaurants } from "../utils/storageUtils.js";
import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

export default function UpdateRestaurant() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(state);

  const handleUpdate = () => {
    if (!confirm("Are you sure you want to update?")) return;

    const updated = getRestaurants().map(r =>
      r.restaurantID === form.restaurantID ? form : r
    );

    saveRestaurants(updated);
    alert("Updated");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <input value={form.restaurantName} onChange={e => setForm({ ...form, restaurantName: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
