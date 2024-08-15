import { Fragment } from "react";
import routes from ".";
import {
  header,
  logo,
  nav,
  active,
  pending,
  navLink,
  indexNavLink,
} from "./Root.module.css";
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
            <Fragment key={i}>
              {!link.hidden && (
                <NavLink
                  className={({ isActive, isPending }) =>
                    `${isActive ? active : isPending ? pending : ""} ${navLink} ${link.index ? indexNavLink : ""}`
                  }
                  to={link.index ? "/" : link.path}
                >
                  {link.name}
                </NavLink>
              )}
            </Fragment>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
