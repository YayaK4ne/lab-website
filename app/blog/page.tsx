export default function BlogPage() {
  const posts = [
    { title: "Optimizing AI Latency", date: "June 2026", excerpt: "How we reduced inference time by 40% using optimized React state." },
    { title: "Web Architecture for Research", date: "May 2026", excerpt: "Building scalable interfaces for dental imaging datasets." }
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold">Research Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <span className="text-blue-600 text-sm font-semibold">{post.date}</span>
            <h2 className="text-xl font-bold mt-2">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}