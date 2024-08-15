import { useNavigate, useRouteError } from "react-router-dom";
import { errorElement, nav } from "./ErrorElement.module.css";

export default function ErrorElement() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  return (
    <section className={errorElement}>
      <p>unexpected error</p>
      <nav className={nav}>
        <button onClick={() => navigate(-1)} className="styled secondary">
          go back
        </button>
        <button onClick={() => navigate("/")} className="styled primary">
          go home
        </button>
      </nav>
    </section>
  );
}
