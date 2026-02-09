

export default function ProductPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ul className="space-y-2">
        <li className="border p-2">Product A งานที่เคยทำ</li>
        <li className="border p-2">Product B</li>
        <li className="border p-2">Product C</li>
      </ul>

      <div>
        <h2 className="text-xl font-bold mb-4">Projects</h2>

        {projects.map((p, i) => (
            <div key={i} className="border p-3 mb-2">
            <h3 className="font-semibold">{p.name}</h3>
            <p>{p.tech}</p>
            </div>
        ))}
        </div>

    </div>
  );
}

const projects = [
  { name: "Dashboard", tech: "React, Power BI" },
  { name: "Survey App", tech: "Next.js, Tailwind" },
];

