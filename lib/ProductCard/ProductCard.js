import clsx from 'clsx';
import Star from './Star';

const ProductCard = (props) => {
  const {
    classNames = {},
    title,
    price,
    url,
    imageUrl,
    altImage,
    Image: ImageComponent,
    rating = 0,
    reviews,
    onAddToCart,
  } = props;

  return (
    <div
      className={clsx(
        'max-w-[282px] min-w-[160px] overflow-hidden',
        classNames.root,
      )}
    >
      <div
        className={clsx(
          'bg-slate-100 w-full h-[160px] md:h-[282px]',
          classNames.imageWrapper,
        )}
      >
        {ImageComponent ? (
          <ImageComponent />
        ) : (
          <img
            className={clsx('object-cover w-full h-full', classNames.image)}
            src={imageUrl}
            alt={altImage}
          />
        )}
      </div>
      <div className="py-6 bg-white">
        <div className="text-center max-w-[225px] min-w-[160px] mx-auto space-y-4 px-3">
          {/* Add support for next/link */}
          <a
            href={url}
            className={clsx('text-lg font-bold leading-6', classNames.title)}
          >
            {title}
          </a>
          <div className="flex flex-wrap items-center justify-center">
            {[...Array(Number(rating)).keys()].map(() => (
              <Star
                className={clsx('fill-yellow-400', classNames.activeStars)}
              />
            ))}
            {[...Array(Number(5 - rating)).keys()].map(() => (
              <Star
                className={clsx('fill-gray-300', classNames.inactiveStars)}
              />
            ))}
            <span className="inline-block ml-2 text-xs capitalize sm:mt-1 md:mt-0">
              {reviews} reviews
            </span>
          </div>
          <button
            onClick={onAddToCart}
            className={clsx(
              'px-5 py-3 text-xs font-black leading-4 text-white uppercase bg-primary-dark',
              classNames.cardCTA,
            )}
          >
            add to cart
          </button>
          <p className={clsx('text-xl font-bold leading-8', classNames.price)}>
            ${price?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
