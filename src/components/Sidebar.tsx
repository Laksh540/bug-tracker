import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  List,
  PlusCircle,
  ChevronsUpDown,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const projects = [
  { id: "1", name: "Bug Tracker" },
  { id: "2", name: "Website Redesign" },
  { id: "3", name: "Mobile App" },
];

const navItems = [
  { to: ROUTES.DASHBOARD, label: "Dashboard", icon: LayoutDashboard },
  { to: ROUTES.ISSUES, label: "Issues", icon: List },
  { to: ROUTES.CREATE_ISSUE, label: "Create Issue", icon: PlusCircle },
];

const Sidebar = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <nav className="flex flex-col gap-1 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent/50",
            )}
          >
            <Building2 className="h-4 w-4 shrink-0" />
            <span className="truncate">{selectedProject.name}</span>
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          {projects.map((project) => (
            <DropdownMenuItem
              key={project.id}
              onSelect={() => setSelectedProject(project)}
            >
              {project.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-2 flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50",
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
