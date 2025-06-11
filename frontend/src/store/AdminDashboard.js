<Route path="/admin" element={<AdminDashboard />} />

const AdminDashboard = () => {
  const user = useSelector(state => state.auth.user);
  if (!user || user.role !== "admin") return <Navigate to="/" />;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">View Orders</Link></li>
        <li><Link to="/admin/coupons">Manage Coupons</Link></li>
      </ul>
    </div>
  );
};
