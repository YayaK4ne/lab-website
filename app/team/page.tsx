export default function Team() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Our Research Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">Yaya Kane</h2>
          <p className="text-gray-600">Lead Researcher</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">Team Member Name</h2>
          <p className="text-gray-600">Research Assistant</p>
        </div>
      </div>
    </main>
  );
}