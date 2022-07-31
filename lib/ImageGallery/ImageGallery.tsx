import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import clsx from 'clsx';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
import useDrag from '../hooks/useDrag';
import { debounce } from '../utils';
import { generateClasses } from '../utils';
import React from "react";
import { Image } from "../utils/types";

interface ClassNames {
  mainImageWrapper?: string
  thumbnailsReel?: string
  thumbnailWrapper?: string
  thumbnailImage?: string
}


interface Props {
  classNames: ClassNames
  Badge?: string
  displayArrows?: boolean
  images: Image[]
  MainImageComponent?: React.FC
  magnifyOnHover?: boolean
  navigateOnHover?: boolean
  reelPosition: string
  onMainImageChange?: (imageUrl: string) => {}
  OverrideClasses?: boolean
}

const ImageGallery: React.FC<Props> = ({
  Badge,
  classNames = {},
  displayArrows = false,
  images = [],
  MainImageComponent,
  magnifyOnHover = false,
  navigateOnHover = false,
  reelPosition = 'bottom',
  onMainImageChange,
                                         OverrideClasses,
}) => {
  const scrollableReel: React.RefObject<HTMLInputElement> = useRef();
  const [scrollForward, setScrollForward] = useState(false);
  const { dragStart, dragMove, dragging } = useDrag();
  const [galleryIndex, setGalleryIndex] = useState(() => {
    if (images.length) {
      const primaryImageIndex = images.findIndex(
        (image) => image.isPrimary === true,
      );
      if (primaryImageIndex === -1) return 0;
      return primaryImageIndex;
    }
    return 0;
  });

  const goNext = () => {
    setGalleryIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex < images.length) {
        return newIndex;
      } else {
        return prevIndex;
      }
    });
  };

  const goBack = () => {
    setGalleryIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex >= 0) {
        return newIndex;
      } else {
        return prevIndex;
      }
    });
  };

  const isThumbnailsSide = reelPosition === 'side';
  const isThumbnailsBottom = reelPosition === 'bottom';

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goBack,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleDrag = (mouseMoveEvent: React.MouseEvent) =>
    dragMove(mouseMoveEvent, ({ positionDiffX, positionDiffY }) => {
      if (scrollableReel.current) {
        if (isThumbnailsBottom) {
          scrollableReel.current.scrollLeft += positionDiffX;
        } else {
          scrollableReel.current.scrollTop += positionDiffY;
        }
      }
    });

  const handleThumbnailChange = (index: any) => {
    if (!dragging) {
      setGalleryIndex(index);
    }
  };

  const moveReelForward = () => {
    if (scrollableReel.current) {
      if (isThumbnailsBottom) {
        scrollableReel.current.scrollLeft += 50;
        // @ts-ignore
        setDragging(true);
      } else {
        scrollableReel.current.scrollTop += 50;
      }
    }
  };

  const moveReelBackWard = () => {
    if (scrollableReel.current) {
      if (isThumbnailsBottom) {
        scrollableReel.current.scrollLeft -= 50;
      } else {
        scrollableReel.current.scrollTop -= 50;
      }
    }
  };

  const isReelScrollable = useMemo(() => {
    const reel = scrollableReel.current;

    return Boolean(
      reel &&
        (reel.scrollWidth > reel.clientWidth ||
          reel.scrollHeight > reel.clientHeight),
    );
  }, [scrollableReel.current]);

  const debouncedOnHoverNavigation = useCallback(
    debounce(handleThumbnailChange),
    [],
  );

  useEffect(() => {
    const reel = scrollableReel.current;
    if (reel) {
      if (isThumbnailsBottom) {
        const isContainerTotallyScrolled =
          Math.abs(reel.scrollWidth - reel.clientWidth - reel.scrollLeft) < 25;
        setScrollForward(!isContainerTotallyScrolled);
      } else {
        const isContainerTotallyScrolled =
          Math.abs(reel.scrollHeight - reel.clientHeight - reel.scrollTop) < 25;
        setScrollForward(!isContainerTotallyScrolled);
      }
    }
  });

  useEffect(() => {
    onMainImageChange && onMainImageChange(images[galleryIndex].imageUrl);
  }, [galleryIndex]);

  return (
    <div
      className={clsx({
        flex: isThumbnailsSide,
      })}
    >
      <div
        className={clsx(
          generateClasses(
            'relative cursor-pointer h-full w-full overflow-hidden',
            classNames.mainImageWrapper,
            OverrideClasses
          ),
          {
            'lg:order-2': isThumbnailsSide,
          },
        )}
        {...handlers}
      >
        {MainImageComponent ? (
          <MainImageComponent />
        ) : (
          <img
            draggable={false}
            className="object-cover w-full h-full animate-fade"
            key={images[galleryIndex].imageUrl}
            src={images[galleryIndex].imageUrl}
            alt={images[galleryIndex].alt}
          />
        )}
        {displayArrows && (
          <>
            <button
              className="absolute hidden -translate-y-1/2 md:block left-4 top-1/2"
              onClick={goBack}
            >
              <LeftChevron className="stroke-slate-800" />
            </button>
            <button
              className="absolute hidden -translate-y-1/2 md:block right-4 top-1/2"
              onClick={goNext}
            >
              <RightChevron className="stroke-slate-800" />
            </button>
          </>
        )}
        {Badge && Badge}
      </div>
      <div className="relative w-fit h-fit">
        <div
          id="thumnails-reel"
          ref={scrollableReel}
          onMouseDown={dragStart}
          onMouseMove={handleDrag}
          className={clsx(
            generateClasses(
              'flex shrink-0 scrollbar-hide',
              classNames.thumbnailsReel,
              OverrideClasses
            ),
            {
              'flex-col ml-1 space-y-1 lg:ml-0 lg:mr-4 lg:space-y-2 overflow-y-auto overflow-x-hidden h-56 md:h-80 lg:h-120':
                isThumbnailsSide,
              'space-x-1 mt-1 lg:space-x-2 lg:mt-4 overflow-x-auto overflow-y-hidden w-56 md:w-80 lg:w-104':
                isThumbnailsBottom,
              'cursor-grabbing': dragging,
            },
          )}
        >
          {images.map((image, index) => (
            <div
              key={image.imageUrl}
              onClick={() => handleThumbnailChange(index)}
              className={clsx(
                'select-none w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] shrink-0 bg-gray-900',
                {
                  'cursor-grabbing': dragging,
                  'cursor-pointer': !dragging,
                },
                classNames.thumbnailWrapper,
              )}
              {...(navigateOnHover && {
                onMouseEnter: () => debouncedOnHoverNavigation(index),
              })}
            >
              {image.Image ? (
                <image.Image />
              ) : (
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  draggable={false}
                  className={clsx(
                    generateClasses(
                      'object-contain w-full h-full',
                      classNames.thumbnailImage,
                      OverrideClasses
                    ),
                  )}
                />
              )}
            </div>
          ))}
        </div>
        {!scrollForward && isReelScrollable && (
          <button
            className={clsx(
              'absolute flex items-center justify-center w-6 h-6 bg-black/90',
              {
                'top-0 left-1/2 -translate-x-3 lg:-translate-x-5 rotate-90':
                  isThumbnailsSide,
                'left-0 -translate-y-1/2 top-1/2': isThumbnailsBottom,
              },
            )}
          >
            <LeftChevron
              className="w-3 h-4 stroke-white"
              viewBox="0 0 16 40"
              onClick={moveReelBackWard}
            />
          </button>
        )}
        {scrollForward && isReelScrollable && (
          <button
            className={clsx(
              'absolute flex items-center justify-center w-6 h-6 bg-black/90 mx-auto',
              {
                'bottom-0 left-1/2 rotate-90 -translate-x-3 lg:-translate-x-5':
                  isThumbnailsSide,
                'right-0 top-1/2 -translate-y-1/2': isThumbnailsBottom,
              },
            )}
            onClick={moveReelForward}
          >
            <RightChevron
              className="w-3 h-4 stroke-white"
              viewBox="0 0 16 40"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
