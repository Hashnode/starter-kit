import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import { create } from 'zustand';

interface Props {
  elRef: any;
}

const canUpdateNavStyle = () => {
  const canUpdate = document.documentElement.clientWidth >= 768;
  return canUpdate;
};

export const useStickyNavElement = create<{
  element: HTMLElement | null;
  setElement: (el: HTMLElement) => void;
  setPositioning: (type: 'sticky' | 'relative') => void;
  translateElement: (by: 'zero' | 'full') => void;
}>((set, get) => ({
  element: null,
  setElement: (el) => {
    set({ element: el });
  },
  setPositioning: (type) => {
    const { element } = get();
    if (element && canUpdateNavStyle()) {
      requestAnimationFrame(() => {
        element.style.position = type;
      });
    }
  },
  translateElement: (by: 'zero' | 'full') => {
    const { element } = get();
    if (element && canUpdateNavStyle()) {
      requestAnimationFrame(() => {
        element.style.transform = `translateY(${by === 'zero' ? '0' : '-100'}%)`;
      });
    }
  },
}));

const useStickyScroll = ({ elRef }: Props) => {
  const [shouldAddScroll, setShouldAddScroll] = useState(false);
  const { setElement } = useStickyNavElement();

  const scrollRef = useRef<{ prevScrollTop: number; animation?: number }>({
    prevScrollTop: 0,
  });

  const getHeaderTopValue = () => {
    const headerPosition = elRef.current?.getBoundingClientRect();
    return headerPosition?.top || 0;
  };

  const performTranslate = (amount: number) => {
    if (elRef.current) {
      elRef.current.style.transform = `translateY(${amount}px)`;
    }
  };

  const getScrollDistance = () => {
    const { prevScrollTop } = scrollRef.current;
    const curScrollTop = window.scrollY;
    return curScrollTop - prevScrollTop;
  };

  const calculateTranslateValue = ({ headerTop, scrollDistance }: { headerTop: number; scrollDistance: number }) => {
    // Add arbitrary small extra offset
    const navHeight = (elRef.current?.offsetHeight || 0) + 30;
    // Clamp value between nav height + small offset (hidden), and 0 (visible)
    return Math.max(
      Math.min(headerTop + (scrollDistance < 0 ? Math.abs(scrollDistance) : -Math.abs(scrollDistance)) * 1, 0),
      -navHeight,
    );
  };

  const handleTranslate = () => {
    const curScrollTop = window.scrollY;

    const headerTop = getHeaderTopValue();
    const scrollDistance = getScrollDistance();
    const translateAmount = calculateTranslateValue({ headerTop, scrollDistance });

    performTranslate(translateAmount);
    scrollRef.current.prevScrollTop = curScrollTop;
  };

  const handleNavScroll = () => {
    scrollRef.current.animation = requestAnimationFrame(handleTranslate);
  };

  useEffect(() => {
    if (!elRef.current) return;
    setElement(elRef.current);
  }, []);

  useEffect(() => {
    if (shouldAddScroll) {
      window.addEventListener('scroll', handleNavScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', handleNavScroll);
      if (elRef.current) elRef.current.style.transform = 'translateY(0px)';
    }

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      if (scrollRef.current.animation) cancelAnimationFrame(scrollRef.current.animation);
    };
  }, [shouldAddScroll]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setShouldAddScroll(window.innerWidth >= 768);
    }, 300);
    handleResize();
    window.addEventListener('resize', handleResize);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export default useStickyScroll;
