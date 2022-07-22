import React from 'react';
import clsx from 'clsx';

const Content = ({
  classNames = {},
  title,
  subTitle,
  imageUrl,
  hasOverlay,
  Image,
  Button,
}) => {
  return (
    <>
      <div
        className={clsx('flex items-center justify-center', classNames.wrapper)}
        style={{
          background: Image === undefined ? 'url(' + imageUrl + ')' : '',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
        }}
      >
        {Image && (
          <div
            style={{
              position: 'fixed',
              height: '100vh',
              width: '100vw',
              overflow: 'hidden',
              zIndex: -1,
            }}
          >
            <Image/>
          </div>
        )}
        <div
          style={{
            background: hasOverlay
              ? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
              : '',
            height: '100vh',
            width: '100vw',
          }}
          className={clsx(
            ' px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8',
            classNames.contentWrapper,
          )}
        >
          <h1
            className={clsx(
              'text-center text-4xl font-extrabold mt-32 tracking-tight sm:text-5xl lg:text-6xl',
              classNames.titleWrapper,
            )}
          >
            <span className={clsx('block text-white', classNames.title)}>
              {title}
            </span>
          </h1>
          <p
            className={clsx(
              'mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl',
              classNames.subTitle,
            )}
          >
            {subTitle}
          </p>
          <div
            className={clsx(
              'mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center  lg:max-w-sm',
              classNames.buttonWrapper,
            )}
          >
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
