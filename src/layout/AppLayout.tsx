import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-64 border-r bg-sidebar lg:block">
        Sidebar placeholder
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center border-b px-4 lg:px-6">
          <button className="mr-2 lg:hidden">Menu</button>
          Topbar placeholder
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
