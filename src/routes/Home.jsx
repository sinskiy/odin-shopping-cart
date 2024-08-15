import { hero, heroText } from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={hero}>
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
      <section>
        <h2>this is not a real website</h2>
        <div className="text">
          <p>
            Welcome to Lidl US. Here, we believe high quality shouldn’t have to
            come at a premium price. Throughout our stores, you’ll find local
            produce, fresh meats and seafood, imported cheeses, European
            pastries, weekly surprises and more at unbelievably low prices.
            Sound too good to be true? Maybe. But at Lidl, you really can have
            your cake and eat it too. Here’s why:
          </p>
          <p>
            Our selection is expertly curated. Instead of offering countless
            brands in every category, we work closely with vendors to source
            high-quality products at competitive prices.
          </p>
          <p>
            You’re busy. We get it. Every store features an intuitive layout for
            a seamless experience.
          </p>
          <p>
            Our private label products are a result of meticulous sourcing. We
            partner with local and regional farms and suppliers to give you
            top-tier freshness and quality. However, we wouldn’t be Lidl without
            a delicious international selection. From authentic Greek pastries
            to real Spanish olives, imported specialties are always waiting in
            stores.
          </p>
          <p>
            Around 80% of our products are private label—all of which undergo
            rigorous taste, quality and sensory testing. What can we say, we’re
            picky.
          </p>
          <p>
            We’re more than just food. Every Wednesday, new surprises await in
            the middle of our stores. You’ll find anything from comfy sweatpants
            to cast iron cookware and more.
          </p>
          <p>
            We keep prices low by keeping overhead to a minimum and eliminating
            any unnecessary costs. Take our “bring your own bag” policy. Not
            only is the cost of bags not built into our product prices, but this
            approach is a greener solution—something we value as a company.
            Also, instead of restocking shelves item by item, products are
            stored in the boxes they arrive in to save time.
          </p>
        </div>
      </section>
    </>
  );
}
