import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/context/ThemeContext";

interface ActionButtonProps {
  icon: LucideIcon;
  text?: string;
  action: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  text,
  action,
}) => {
  const { state } = useTheme();
  return (
    <Button
      className={`relative overflow-hidden border-2 border-amber-400 rounded-full pr-0 py-6 pl-6 font-semibold flex justify-between items-center
               bg-transparent ${
                 state.isDark ? "text-white" : "text-zinc-700"
               } transition-all duration-300 ease-in-out 
               hover:bg-amber-400 hover:text-black`}
      variant="outline"
      onClick={() => action()}
    >
      <p>{text}</p>
      <div className="rounded-full bg-amber-400 p-4 text-5xl">
        <Icon color="white" />
      </div>
    </Button>
  );
};

export default ActionButton;
