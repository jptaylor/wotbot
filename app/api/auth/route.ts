import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function POST() {
  const { data, error } = await supabase.auth.signUp({
    email: "heyjtaylor@gmail.com",
    password: "example-password",
  });

  return Response.json({ data, error });
}
