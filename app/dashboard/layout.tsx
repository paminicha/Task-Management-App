import Sidebar from "@/components/layout/Sidebar";
import ThemeProvider from "@/features/theme/ThemeProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col">

      {/* Body */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
    </ThemeProvider>
  );
}
