import { createClient } from "@/utils/supabase/server";

async function BotList() {
  const supabase = createClient();
  const { data: bots } = await supabase.from("bots").select();
  return (
    <ul>
      {bots?.map((bot) => (
        <li key={bot.id}>{bot.bot_name}</li>
      ))}
    </ul>
  );
}

export default BotList;
