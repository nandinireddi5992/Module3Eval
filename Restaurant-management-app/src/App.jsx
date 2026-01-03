import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UpdateRestaurant from "../pages/UpdateRestaurant";
import ProtectedRoute from "../components/ProtectedRoute";
import CustomerDashboard from "../pages/CustomerDashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/restaurants/update"
        element={
          <ProtectedRoute role="admin">
            <UpdateRestaurant />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers/dashboard"
        element={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />
    <h1>APP IS WORKING</h1>;
    </Routes>
  );
}

export default App;
