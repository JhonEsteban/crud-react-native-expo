import { useState } from 'react';

const useTaskForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    handleIsActive,
  };
};

export default useTaskForm;
