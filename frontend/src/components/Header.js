import NotificationIcon from './NotificationIcon';

const Header = () => {
  return (
    <header>
      <div className="logo">🛒 ShopApp</div>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        {/* other links */}
        <NotificationIcon />
      </nav>
    </header>
  );
};

export default Header;
