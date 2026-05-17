export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">NetraCore AI</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </div>
  );
}
