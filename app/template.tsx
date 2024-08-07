import Sidebar from "@/components/dashboard/Sidebar";
import useAuth from "@/utils/auth";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await useAuth();

  return (
    <>
      {user ? (
        <div className="grid grid-cols-[260px_1fr] min-h-screen">
          <Sidebar />
          <main className="p-air">{children}</main>
        </div>
      ) : (
        children
      )}
    </>
  );
}
