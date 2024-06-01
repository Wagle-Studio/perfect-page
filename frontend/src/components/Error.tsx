export function Error() {
  const key = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;

  return <div key={key}>Block Factory Markup Configuration Error</div>;
}
