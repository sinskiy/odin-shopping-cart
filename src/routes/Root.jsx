import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <Link to="/">Shopping cart</Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
