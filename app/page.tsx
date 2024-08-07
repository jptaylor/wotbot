import Login from "@/components/auth/Login";
import useAuth from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await useAuth();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Login />
    </main>
  );
}
