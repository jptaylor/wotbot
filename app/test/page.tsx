import { Button } from "@/components/ui/button";
import useAuth from "@/utils/auth";
import Link from "next/link";

export default async function PrivatePage() {
  const user = await useAuth();

  return (
    <div>
      <p>Hello {user?.email}</p>

      <Button asChild>
        <Link href="/auth">Signout</Link>
      </Button>
    </div>
  );
}
