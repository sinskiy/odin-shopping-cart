import routes from ".";
import { header, logo, nav, active, pending } from "./Root.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
  const links = routes[0].children;
  return (
    <>
      <header className={header}>
        <Link className={logo} to="/">
          buyThings
        </Link>
        <nav className={nav}>
          {links.map((link, i) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : ""
              }
              to={link.index ? "/" : link.path}
              key={i}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
