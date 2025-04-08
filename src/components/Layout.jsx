import { Outlet, Link } from 'react-router';

const Layout = () => {
    return (
    <div>
        <header>
        <h1>My App</h1>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/upload">Upload</Link>
      </li>
    </ul>
  </nav>
  </header>
  <main>
    <Outlet />
  </main>
</div>
    );
};

export default Layout;