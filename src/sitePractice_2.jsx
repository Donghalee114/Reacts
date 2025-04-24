import { useEffect, useRef, useState } from 'react';
import './site2.css';

function SitePractice_2() {
  const trainCompartment = ['1칸', '2칸', '3칸', '4칸', '5칸'];
  const [curSide, setCurSide] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const FIRST_SLIDE_INDEX = 0;
  const LAST_SLIDE_INDEX = trainCompartment.length - 1;

  const moveToSlide = (value) => {
    if (value === 'next') {
      setCurSide((prev) => (prev < LAST_SLIDE_INDEX ? prev + 1 : 0));
    } else if (value === 'prev') {
      setCurSide((prev) => (prev > FIRST_SLIDE_INDEX ? prev - 1 : LAST_SLIDE_INDEX));
    }
  };

  const autoMoveSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      moveToSlide('next');
    }, 3000);
  };

  useEffect(() => {
    autoMoveSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    deltaX.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (deltaX.current > 50) moveToSlide('prev');
    else if (deltaX.current < -50) moveToSlide('next');
    deltaX.current = 0;
    autoMoveSlide();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) handleMouseUp();
  };

  return (
    <div className="main">
      <div
        className="train"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={(e) => {
          handleMouseLeave(e);
          autoMoveSlide();
        }}
      >
        <div className="show">
          {trainCompartment.map((item, index) => (
            <div
              className="compartment"
              key={index}
              style={{
                transform: `translateX(-${curSide * 100}%)`,
                transition: 'all 0.6s ease-in-out',
                minWidth: '100%',
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={() => moveToSlide('prev')}>
          이전
        </button>
        <button className="next-button" onClick={() => moveToSlide('next')}>
          다음
        </button>
      </div>
    </div>
  );
}

export default SitePractice_2;
