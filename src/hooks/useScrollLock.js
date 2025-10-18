import { useEffect } from 'react';

const useScrollLock = (locked) => {
  useEffect(() => {
    const { body } = document;
    if (!body) return;

    if (locked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [locked]);
};

export default useScrollLock;
