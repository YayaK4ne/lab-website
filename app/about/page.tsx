export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">About the Lab</h1>
      
      <div className="border-l-4 border-blue-600 pl-6 py-2">
        <p className="text-xl text-gray-700 font-medium">
          Advancing dental science through computational intelligence at McGill University.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Yaya Kane</h3>
          <p className="text-gray-600">Student Research Assistant</p>
          <p className="text-sm text-gray-500 mt-4">
            Specializing in full-stack web development and AI-driven diagnostic interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}