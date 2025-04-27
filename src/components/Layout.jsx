import {Link, Outlet} from 'react-router';

const Layout = () => {
  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold m-4'>My App</h1>
        <nav className='mb-4'>
          <ul className="overflow-hidden bg-stone-900 flex justify-end list-none mb-2">
            <li>
              <Link className='block text-stone-50 text-center hover:bg-stone-600 p-4' to="/">Home</Link>
            </li>
            <li>
              <Link className='block text-stone-50 text-center hover:bg-stone-600 p-4' to="/profile">Profile</Link>
            </li>
            <li>
              <Link className='block text-stone-50 text-center hover:bg-stone-600 p-4' to="/upload">Upload</Link>
            </li>
            <li>
              <Link  className='block text-stone-50 text-center hover:bg-stone-600 p-4'to="/login">Login</Link>
            </li>
            <li>
              <Link className='block text-stone-50 text-center hover:bg-stone-600 p-4' to="/logout">Log Out</Link>
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