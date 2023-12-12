import { useState } from 'react';

export const useDeleteModal = () => {
  const [open, setOpen] = useState(false);

  const changeModalVisibility = () => {
    setOpen(prevState => !prevState);
  };

  return { open, changeModalVisibility };
};
