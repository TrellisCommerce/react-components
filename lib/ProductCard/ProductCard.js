import clsx from 'clsx';
import { ImageGallery } from '../ImageGallery';
import { StarRating } from '../StarRating';

const ProductCard = (props) => {
  const {
    classNames = {},
    title,
    price,
    url,
    imageUrl,
    altImage,
    Image: ImageComponent,
    starRating = 0,
    reviews,
    onAddToCart,
    displayVariants = false,
    variantImages = [],
  } = props;

  return (
    <div className={clsx('max-w-[282px] min-w-[160px] group', classNames.root)}>
      <div
        className={clsx(
          'bg-slate-100 w-full overflow-hidden',
          classNames.imageWrapper,
        )}
      >
        {ImageComponent ? (
          <ImageComponent />
        ) : (
          <>
            {displayVariants && (
              <div className="hidden w-full group-hover:block">
                <ImageGallery
                  classNames={{
                    thumbnailsReel: 'max-w-[282px] min-w-[160px]',
                  }}
                  images={variantImages}
                  reelPosition="bottom"
                  navigateOnHover
                />
              </div>
            )}
            <img
              className={clsx(
                'object-cover w-full h-full ',
                { 'group-hover:hidden': displayVariants },
                classNames.image,
              )}
              src={imageUrl}
              alt={altImage}
            />
          </>
        )}
      </div>
      <div className="py-6 bg-white">
        <div className="text-center max-w-[225px] min-w-[160px] mx-auto space-y-4 px-3">
          {/* TODO: Add support for next/link */}
          <a
            href={url}
            className={clsx('text-lg font-bold leading-6', classNames.title)}
          >
            {title}
          </a>
          <div className="flex flex-wrap items-center justify-center">
            <StarRating
              starRating={starRating}
              classNames={{
                starRating: 'hidden',
                ...classNames.starRating,
              }}
            />
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
