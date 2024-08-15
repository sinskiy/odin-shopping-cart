import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <Link to="/">buyThings</Link>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/cart">cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
