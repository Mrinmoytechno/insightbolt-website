export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      items: ["Business", "Audience", "Offer", "Goals"],
    },
    {
      number: "02",
      title: "CREATE",
      items: ["Content", "Campaigns", "Marketing systems"],
    },
    {
      number: "03",
      title: "LEARN",
      items: [
        "Customer responses",
        "Content performance",
        "Campaign results",
        "Enquiries",
      ],
    },
    {
      number: "04",
      title: "IMPROVE",
      items: ["Keep", "Change", "Stop", "Test"],
    },
  ];

  return (
    <section className="process-section section-light" id="process">
      <div className="section-shell">
        <div className="process-heading">
          <div className="section-eyebrow">HOW IT WORKS</div>

          <h2>THE PROCESS IS PRETTY SIMPLE.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-card-top">
                <span>{step.number}</span>
                <span>STEP</span>
              </div>

              <h3>{step.title}</h3>

              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="process-repeat">
          <span>THEN</span>
          <strong>REPEAT.</strong>
        </div>
      </div>
    </section>
  );
}