import { useEffect, useState } from "react";

type HookOutput = [boolean, (value: boolean) => void];

export const useModalOpenState = (isOpen: boolean = false): HookOutput => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    if (isModalOpen !== isOpen) {
      setIsModalOpen(isOpen);
    }
  }, [isOpen, setIsModalOpen, isModalOpen]);

  return [isModalOpen, setIsModalOpen];
};
