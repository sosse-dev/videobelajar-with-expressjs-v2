export default function HeaderForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <header className="flex flex-col items-center gap-3.5 mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-opacity-60 text-center">{desc}</p>
    </header>
  );
}
