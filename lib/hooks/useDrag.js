import { useState, useCallback, useEffect } from 'react';

export default function useDrag() {
  const [clicked, setClicked] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ positionX: 0, positionY: 0 });

  const dragStart = useCallback(({ clientX, clientY }) => {
    setPosition({ positionX: clientX, positionY: clientY });
    setClicked(true);
  }, []);

  const dragStop = useCallback(
    () =>
      // NOTE: need some delay so item under cursor won't be clicked
      window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
      }),
    [],
  );

  const dragMove = ({ clientX, clientY }, cb) => {
    const positionDiffX = position.positionX - clientX;
    const positionDiffY = position.positionY - clientY;
    const movedEnough =
      Math.abs(positionDiffX) > 5 || Math.abs(positionDiffY) > 5;

    if (clicked && movedEnough) {
      setDragging(true);
    }

    if (dragging && movedEnough) {
      setPosition({ positionX: clientX, positionY: clientY });
      cb({ positionDiffX, positionDiffY });
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', dragStop);

    return () => {
      window.removeEventListener('mouseup', dragStop);
    };
  }, []);

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
  };
}
