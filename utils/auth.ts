import { createClient } from "./supabase/server";

const useAuth = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return error || !data.user ? null : data.user;
};

export default useAuth;
