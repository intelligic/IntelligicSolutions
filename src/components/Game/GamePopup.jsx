import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import GameFile from "./GameFile";

const GamePopup = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[800px] md:max-w-[900px] p-0 overflow-hidden border-none rounded-[2rem] bg-white shadow-[0_25px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 outline-none transition-all duration-500">
         <GameFile onExit={onClose} isPopup={true} />
      </DialogContent>
    </Dialog>
  );
};

export default GamePopup;
