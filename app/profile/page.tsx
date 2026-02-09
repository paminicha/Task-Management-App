export default function ProfilePage() {
  return (
    <div className="flex items-center gap-6">
      <img
        src="https://via.placeholder.com/150"
        className="rounded-full"
        alt="profile"
      />
      <div>
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p>Frontend Developer</p>
        <p>Home        → แนะนำตัว</p>
        <p>Projects    → งานที่เคยทำ</p>
        <p>Skills      → Tech stack</p>
        <p>Contact     → ช่องทางติดต่อ</p>
        <ul className="space-y-2">
          <li className="border p-2">HTML / CSS / JavaScript</li>
          <li className="border p-2">React / Next.js</li>
          <li className="border p-2">Tailwind CSS</li>
          <li className="border p-2">Power BI / DAX</li>
          <li className="border p-2">Python / pandas</li>
          <li className="border p-2">UX/UI Design</li>
        </ul>
        
      </div>
    </div>
  );
}
