export default function TeamPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Faculty & Staff</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800">SN</div>
            <div>
              <p className="font-bold">Dr. [Name]</p>
              <p className="text-sm text-gray-500">Principal Investigator</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800">YK</div>
            <div>
              <p className="font-bold">Yaya Kane</p>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}