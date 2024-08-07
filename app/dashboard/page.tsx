import BotList from "@/components/bots/BotList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard - Wotbot",
};

export default async function Dashboard() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <BotList />
      </Suspense>
    </section>
  );
}
