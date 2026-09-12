"use client";

import { MouseEvent } from "react";

const packages = [
  {
    name: "LAUNCH",
    price: "₹4,999",
    billing: "ONE-TIME",
    description:
      "For businesses that want to test the waters.",
    items: [
      "2 reels",
      "2 carousels/static posts",
      "Captions + CTAs",
      "1-week content plan",
      "Basic profile + offer review",
      "1 campaign/content recommendation",
      "7-day delivery",
    ],
    cta: "Start with Launch →",
    packageValue: "Launch",
  },
  {
    name: "STARTER",
    price: "₹7,999",
    billing: "/ MONTH",
    description:
      "For businesses that need consistent social media execution.",
    items: [
      "8 content pieces",
      "4 reels",
      "4 carousels/static posts",
      "Monthly content calendar",
      "Instagram posting",
      "Basic profile optimisation",
      "Monthly performance summary",
    ],
    cta: "Start with Starter →",
    packageValue: "Starter",
  },
  {
    name: "GROWTH",
    price: "₹14,999",
    billing: "/ MONTH",
    description:
      "Our main recurring system.",
    items: [
      "12 content pieces",
      "6 reels",
      "6 carousels/static posts",
      "Instagram management",
      "Up to 12 stories",
      "1 campaign/offer plan",
      "Customer Signal Loop research",
      "Monthly strategy review",
      "Performance report",
      "Next-month recommendations",
    ],
    cta: "Build with Growth →",
    packageValue: "Growth",
    featured: true,
  },
  {
    name: "GROWTH PLUS",
    price: "₹24,999",
    billing: "/ MONTH",
    description:
      "For businesses ready for more execution + advertising.",
    items: [
      "16 content pieces",
      "8 reels",
      "8 carousels/static posts",
      "Instagram management",
      "Up to 20 stories",
      "2 campaigns/offers",
      "Customer Signal Loop optimisation",
      "Basic enquiry tracking",
      "Monthly strategy meeting",
      "Paid advertising management",
      "Ad spend is separate.",
    ],
    cta: "Build with Growth Plus →",
    packageValue: "Growth Plus",
  },
];

function selectPackage(
  event: MouseEvent<HTMLAnchorElement>,
  packageValue: string
) {
  event.preventDefault();

  const url = new URL(
    window.location.href
  );

  url.searchParams.set(
    "package",
    packageValue
  );

  url.hash = "contact";

  window.history.pushState(
    {},
    "",
    url.toString()
  );

  window.dispatchEvent(
    new CustomEvent(
      "insightbolt-package-select",
      {
        detail: {
          packageValue,
        },
      }
    )
  );

  document
    .getElementById("contact")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

export default function Packages() {
  return (
    <section
      className="packages-section section-dark"
      id="packages"
    >
      <div className="section-shell">

        <div className="packages-heading">
          <div className="section-eyebrow section-eyebrow-light">
            PACKAGES
          </div>

          <h2>
            PICK YOUR LEVEL
            <br />
            OF INVOLVEMENT.
          </h2>

          <p>
            Because not every business needs us
            living inside their Instagram account.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`package-card ${
                pkg.featured
                  ? "package-card-featured"
                  : ""
              }`}
            >

              {pkg.featured && (
                <div className="package-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="package-card-header">

                <div className="package-name">
                  {pkg.name}
                </div>

                <div className="package-price-row">
                  <span className="package-price">
                    {pkg.price}
                  </span>

                  <span className="package-billing">
                    {pkg.billing}
                  </span>
                </div>

                <p className="package-description">
                  {pkg.description}
                </p>

              </div>

              <div className="package-divider" />

              <div className="package-features-heading">
                WHAT&apos;S INCLUDED
              </div>

              <ul className="package-list">
                {pkg.items.map((item) => (
                  <li key={item}>
                    <span
                      className="package-check"
                      aria-hidden="true"
                    >
                      +
                    </span>

                    <span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="package-card-footer">
                <a
                  href={`/?package=${encodeURIComponent(
                    pkg.packageValue
                  )}#contact`}
                  onClick={(event) =>
                    selectPackage(
                      event,
                      pkg.packageValue
                    )
                  }
                  className={`package-link ${
                    pkg.featured
                      ? "package-link-featured"
                      : ""
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}