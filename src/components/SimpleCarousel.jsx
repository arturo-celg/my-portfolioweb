import React, { useRef, useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SimpleCarousel({ items = [], renderItem, getKey, ariaLabel = 'carousel' }) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft > 0;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    setCanScroll({ left, right });
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [items.length]);

  const scrollStep = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstItem = el.querySelector(':scope > *');
    let step = Math.floor(el.clientWidth * 0.9); // fallback: casi pantalla
    if (firstItem) {
      const w = firstItem.getBoundingClientRect().width;
      const styles = getComputedStyle(el);
      const gap = parseInt(styles.gap || styles.columnGap || '0', 10);
      step = w + gap;
    }
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  if (!items || items.length === 0) return null;

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '100%', 
        minWidth: 0,
        overflow: 'hidden'
      }} 
      aria-label={ariaLabel}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          overflowY: 'hidden',
          py: 1,
          px: { xs: 0.5, sm: 1 },
          scrollBehavior: 'smooth',
          overscrollBehaviorX: 'contain',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
        }}
      >
        {items.map((item, i) => (
          <Box 
            key={getKey ? getKey(item, i) : i} 
            sx={{ 
              minWidth: { xs: 240, sm: 280, md: 300 }, 
              maxWidth: { xs: '85vw', sm: '70vw', md: 400 },
              flex: '0 0 auto'
            }}
          >
            {renderItem(item, i)}
          </Box>
        ))}
      </Box>

      <IconButton
        size="small"
        onClick={() => scrollStep(-1)}
        aria-label="prev"
        disabled={!canScroll.left}
        sx={{ 
          position: 'absolute', 
          left: { xs: 0, sm: 8 }, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          zIndex: 2, 
          backgroundColor: 'rgba(0,0,0,0.35)', 
          color: '#fff', 
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }, 
          opacity: canScroll.left ? 1 : 0.4, 
          pointerEvents: canScroll.left ? 'auto' : 'none',
          display: items.length > 1 ? 'flex' : 'none'
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => scrollStep(1)}
        aria-label="next"
        disabled={!canScroll.right}
        sx={{ 
          position: 'absolute', 
          right: { xs: 0, sm: 8 }, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          zIndex: 2, 
          backgroundColor: 'rgba(0,0,0,0.35)', 
          color: '#fff', 
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }, 
          opacity: canScroll.right ? 1 : 0.4, 
          pointerEvents: canScroll.right ? 'auto' : 'none',
          display: items.length > 1 ? 'flex' : 'none'
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
