import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: () => void) => {

  const handleClick = (event: MouseEvent) => {
    if (
      event.target instanceof HTMLDivElement &&
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useOutsideClick;