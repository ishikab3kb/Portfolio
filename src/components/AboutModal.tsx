import { Dialog, DialogContent } from "./ui/dialog";

import About from "./About";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AboutModal = ({ isOpen, onClose }: Props) => {
  const { state } = useTheme();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`min-w-xs md:min-w-2xl max-h-[90vh] overflow-y-auto ${
          state.isDark ? "bg-black text-white" : "bg-white text-black"
        } border-amber-400`}
      >
        <About />
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
