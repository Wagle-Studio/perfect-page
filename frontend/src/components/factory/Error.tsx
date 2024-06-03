export function Error() {
  const key = Math.floor(Math.random() * (1000000 - 100 + 1)) + 100;

  return <div key={key}>Block Factory Markup Configuration Error</div>;
}
