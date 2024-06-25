import type { PropsWithChildren } from "react";
import { Header, Sidebar } from "@/components";

export default function CustomerDashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <section>
      <div className="flex flex-col h-screen">
        {/*desktop header*/}
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden sm:block overflow-hidden">
            <Sidebar />
          </aside>
          <div className="overflow-y-auto w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
