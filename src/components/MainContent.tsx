import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

const MainContent = ({ children, className }: MainContentProps) => {
  return (
    <main className={cn("flex-1 overflow-y-auto p-4 lg:p-6", className)}>
      {children}
    </main>
  );
};

export default MainContent;
