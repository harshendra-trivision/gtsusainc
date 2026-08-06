'use client';

import { useEffect } from 'react';

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [locked]);
}
