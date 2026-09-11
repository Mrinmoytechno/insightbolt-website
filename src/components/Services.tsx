const serviceGroups = [
  {
    number: "01",
    title: "CONTENT",
    items: [
      "Reels",
      "Carousels",
      "Static posts",
      "Captions",
      "Content planning",
    ],
  },
  {
    number: "02",
    title: "SOCIAL MEDIA",
    items: [
      "Instagram management",
      "Publishing",
      "Profile optimisation",
      "Content systems",
    ],
  },
  {
    number: "03",
    title: "CAMPAIGNS",
    items: [
      "Offers",
      "Promotions",
      "Launches",
      "Campaign planning",
      "Advertising support",
    ],
  },
  {
    number: "04",
    title: "MARKETING",
    items: [
      "Strategy",
      "Customer research",
      "Performance review",
      "Ongoing improvement",
    ],
  },
];

export default function Services() {
  return (
    <section className="section section-light services-section" id="services">
      <div className="container">
        <div className="services-heading">
          <div>
            <div className="eyebrow">WHAT WE ACTUALLY DO</div>

            <h2>SO, WHAT DO WE ACTUALLY DO?</h2>
          </div>
        </div>

        <div className="services-grid">
          {serviceGroups.map((service) => (
            <article className="service-card-light" key={service.number}>
              <div className="service-card-header">
                <span>{service.number}</span>
                <span>↗</span>
              </div>

              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services-conclusion">
          <span>Not four separate things.</span>

          <strong>One marketing system.</strong>
        </div>
      </div>
    </section>
  );
}