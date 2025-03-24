import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ActionButtonProps {
  icon: LucideIcon;
  text?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, text }) => {
  return (
    <Button
      className="relative overflow-hidden border-2 border-amber-400 rounded-full pr-0 py-6 pl-6 font-semibold flex justify-between items-center
               bg-transparent text-white transition-all duration-300 ease-in-out 
               hover:bg-amber-400 hover:text-black"
      variant="outline"
    >
      <p>{text}</p>
      <div className="rounded-full bg-amber-400 p-4 text-5xl">
        <Icon color="white" />
      </div>
    </Button>
  );
};

export default ActionButton;
