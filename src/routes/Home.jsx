import { home, heroText } from "./Home.module.css";

export default function Home() {
  return (
    <section className={home}>
      <img
        src="https://images.ctfassets.net/u41cm62nxtp7/2oQgUuzHo1oV3nazkQVaOI/85ca99ce0ad2a1db6117dd889554a7ce/img-hero-teaser-history_2x.jpg?fm=webp"
        alt=""
      />
      <div className={heroText}>
        <h1>
          high quality.
          <br />
          low prices.
        </h1>
      </div>
    </section>
  );
}
