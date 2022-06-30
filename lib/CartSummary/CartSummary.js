import React from 'react';
import PropTypes from 'prop-types';
import { Pricing } from '../Pricing';
import clsx from 'clsx';

function CartSummary(props) {
  const {
    classNames,
    cartItems,
    quantityLabel,
    isReadOnly,
    onChange,
    onRemove,
    removeLabel,
  } = props;

  return (
    <div className={classNames?.root}>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'flex flex-row last:border-0 border-b mb-2 pb-2',
            classNames?.itemContainer,
          )}
        >
          {item.ImageComponent && <item.ItemComponent />}
          {!item.ImageComponent && item.imageUrl && (
            <img
              src={item.imageUrl}
              className={clsx(
                'max-w-[8rem] max-h-[8rem] border border-slate-200 rounded-md',
                classNames?.image,
              )}
            />
          )}
          <div className="flex flex-col md:flex-row flex-grow">
            <div className="md:flex-grow px-2">
              <p className={classNames?.productTitle}>{item.title}</p>
              <p
                className={clsx(
                  'text-sm text-gray-500',
                  classNames?.variantTitle,
                )}
              >
                {item.variantTitle}
              </p>
              {isReadOnly ? (
                <p
                  className={clsx(
                    'text-sm text-gray-500',
                    classNames?.quantityLabel,
                  )}
                >
                  {quantityLabel} {item.quantity}
                </p>
              ) : (
                <div className="flex items-center">
                  <label
                    htmlFor={`qty-${item.id}`}
                    className={clsx(
                      'text-sm text-gray-500 mr-1',
                      classNames?.quantityLabel,
                    )}
                  >
                    {quantityLabel}
                  </label>
                  <fieldset
                    className={clsx(
                      'flex border border-slate-300 w-min rounded-md overflow-hidden',
                      classNames?.field?.root,
                    )}
                  >
                    <input
                      id={`qty-${item.id}`}
                      type="text"
                      pattern="[0-9]*"
                      value={item.quantity}
                      onChange={(e) => onChange(item.id, e.target.value)}
                      min="1"
                      className={clsx(
                        'max-w-[2rem] m-1 text-center',
                        classNames?.field?.input,
                      )}
                    />
                    <div className="flex flex-col border-l border-slate-300">
                      <button
                        className={clsx(
                          'border-b border-slate-300 px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black',
                          classNames?.field?.plus,
                        )}
                        onClick={() => onChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className={clsx(
                          'px-1 text-slate-300 hover:text-black hover:bg-slate-100 focus:bg-slate-300 focus:text-black',
                          classNames?.field?.minus,
                        )}
                        onClick={() =>
                          item.quantity > 1 &&
                          onChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                  </fieldset>
                </div>
              )}
            </div>
            <div
              className={clsx(
                'px-2 flex flex-col items-end',
                classNames?.pricingContainer,
              )}
            >
              <Pricing
                originalPrice={item.originalPrice}
                promotionalPrice={item.promotionalPrice}
                classNames={classNames?.pricing}
              />
              {!isReadOnly && (
                <button
                  className={clsx(
                    'p-2 rounded-full hover:bg-slate-200 focus:bg-slate-300',
                    classNames?.removeButton,
                  )}
                  onClick={() => onRemove(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={clsx(
                      'fill-current text-red-600 w-4 h-4',
                      classNames?.removeButtonIcon,
                    )}
                    labelledby="title"
                  >
                    <title>{removeLabel}</title>
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

CartSummary.propTypes = {
  /**
	  * object of classNames to add to each part of the component.
	 
	  * e.g. `{ root: 'p-2', productTitle: 'text-xl', removeButtonIcon: ['w-10', 'h-10'] }`
	 */
  classNames: PropTypes.shape({
    root: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    itemContainer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    productTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    variantTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    quantityLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    field: PropTypes.shape({
      root: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      input: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      plus: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      minus: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    }),
    pricingContainer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    pricing: PropTypes.shape({
      original: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      promotional: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    }),
    removeButton: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    removeButtonIcon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /**
		* Array of cart items

		* `id: Product ID`

		* `title: Product Title`

		* `variantTitle: Product Variant Title`

	 	* `quantity: Quantity on cart`

		* `originalPrice: Original Price of Product`

		* `promotionalPrice: Promotional Price of Product`

		* `imageUrl: Image URL of Product`

		* `ImageComponent: Image component such as 'next/image' to override imageUrl`
	  */
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      variantTitle: PropTypes.string,
      quantity: PropTypes.number,
      originalPrice: PropTypes.string,
      promotionalPrice: PropTypes.string,
      imageUrl: PropTypes.string,
      ImageComponent: PropTypes.func,
    }),
  ),
  /**
   * Label for `quantity`
   */
  quantityLabel: PropTypes.string,
  /**
   * default: true - If false, will render controls for quantity and remove item from cart
   */
  isReadOnly: PropTypes.bool,
  /**
   * onChange handler for quantity
   * @param {string} id
   * @param {number} quantity
   */
  onChange: PropTypes.func,
  /**
   * onRemove handler for item
   * @param {string} id
   */
  onRemove: PropTypes.func,
  /**
   * Remove from cart button label
   */
  removeLabel: PropTypes.string,
};

CartSummary.defaultProps = {
  quantityLabel: 'Qty:',
  isReadOnly: true,
  onChange: (id, quantity) => ({ id, quantity }),
  onRemove: (id) => ({ id }),
  removeLabel: 'Remove',
};

export default CartSummary;
