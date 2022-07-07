import clsx from 'clsx';
import { ImageGallery } from '../ImageGallery';
import { StarRating } from '../StarRating';
import { generateClasses } from "../utils";

const ProductCard = (props) => {
  const {
    altImage,
    classNames = {},
    displayVariants = false,
    Image: ImageComponent,
    imageUrl,
    LinkComponent,
    onAddToCart,
    price,
    reviews,
    starRating = 0,
    textCTA = '',
    title,
    url,
    variantImages = [],
  } = props;

  return (
    <div className={clsx(generateClasses('max-w-[282px] min-w-[160px] group', classNames.root))}>
      <div
        className={clsx(generateClasses('bg-slate-100 w-full overflow-hidden', classNames.imageWrapper))}
      >
        {ImageComponent ? (
          <ImageComponent />
        ) : (
          <>
            {displayVariants && (
              <div className="hidden w-full group-hover:block animate-fade">
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
                generateClasses('object-cover w-full h-full', classNames.image),
                { 'group-hover:hidden': displayVariants }
              )}
              src={imageUrl}
              alt={altImage}
            />
          </>
        )}
      </div>
      <div className="py-6 bg-white">
        <div className="text-center max-w-[225px] min-w-[160px] mx-auto space-y-4 px-3">
          {LinkComponent ? (
            LinkComponent
          ) : (
            <a
              href={url}
              className={clsx(generateClasses('text-lg font-bold leading-6', classNames.title))}
            >
              {title}
            </a>
          )}
          <div className="flex flex-wrap items-start justify-center">
            <StarRating
              starRating={starRating}
              classNames={{
                starSize: generateClasses('', classNames.starSize),
              }}
            />
            <span className="inline-block ml-2 text-xs capitalize sm:mt-1 md:mt-0">
              {reviews} reviews
            </span>
          </div>
          <button
            onClick={onAddToCart}
            className={clsx(generateClasses('px-5 py-3 text-xs font-black leading-4 text-white uppercase bg-primary-dark', classNames.cardCTA))}
          >
            {textCTA}
          </button>
          <p className={clsx(generateClasses('text-xl font-bold leading-8', classNames.price))}>
            ${price?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
