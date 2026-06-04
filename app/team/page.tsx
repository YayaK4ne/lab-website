export default function TeamPage() {
  const members = [{ name: "Yaya Kane", role: "Principal Investigator" }];

  return (
    <section className="p-20">
      <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}