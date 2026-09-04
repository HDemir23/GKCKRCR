export default function Loading() {
  return (
    <main className="loading-shell" aria-label="Sayfa yükleniyor">
      <div className="loading-line loading-line-short" />
      <div className="loading-line loading-line-title" />
      <div className="loading-grid">
        <div className="loading-block" />
        <div className="loading-block" />
      </div>
    </main>
  );
}
