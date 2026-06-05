export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Get in Touch</h1>
      <div className="bg-white p-10 rounded-2xl border border-gray-200 text-center shadow-sm">
        <p className="text-lg text-gray-600 mb-6">Interested in our research or potential collaborations?</p>
        <a 
          href="mailto:yaya.kane@mail.mcgill.ca" 
          className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
}