'use client';
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 bg-blue-900 text-white px-6 py-2 rounded">
        Try again
      </button>
    </div>
  );
}