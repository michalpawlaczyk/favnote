import { useEffect, useRef } from 'react';

export const useOutsideClick = (closeFuction, isVisible) => {
  const ref = useRef(null);

  // TODO need improvment. Close button doesn't work when using this hook

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isVisible) {
        closeFuction();
      }
    };
    if (isVisible) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [isVisible, closeFuction]);

  return ref;
};
