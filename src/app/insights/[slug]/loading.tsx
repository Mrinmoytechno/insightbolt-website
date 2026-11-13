export default function InsightLoading() {
  return (
    <main className="insight-loading-screen">

      <div
        className="insight-loading-content"
        role="status"
        aria-live="polite"
      >

        <div className="insight-loading-spinner">
          <span />
        </div>

        <p>PREPARING THE INSIGHT</p>

        <small>
          Research. Strategy. Perspective.
        </small>

      </div>

    </main>
  );
}