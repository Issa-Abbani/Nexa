export default function AIOverviewLayout() {
  const text: string = "Hi";

  return (
    <>
      {Array.from({ length: 200 }).map((_, i) => (
        <h1 key={i}>{text}</h1>
      ))}
    </>
  );
}