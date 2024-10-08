import { Fragment, useState } from "react";
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
  const links = routes[0].children[0].children;
  const [cartLength, setCartLength] = useState(0);

  return (
    <>
      <header className={header}>
        <Link className={logo} to="/">
          buyThings
        </Link>
        <nav className={nav}>
          {links.map((link, i) => (
            <Fragment key={i}>
              {link.element && (
                <NavLink
                  className={({ isActive, isPending }) =>
                    `${isActive ? active : isPending ? pending : ""} ${navLink} ${link.index ? indexNavLink : ""}`
                  }
                  to={link.index ? "/" : link.path}
                  aria-label={link.label && link.label}
                >
                  {link.name ? link.name : link.icon}
                  {link.label === "cart" && cartLength}
                </NavLink>
              )}
            </Fragment>
          ))}
        </nav>
      </header>
      <main>
        <Outlet context={setCartLength} />
      </main>
    </>
  );
}
