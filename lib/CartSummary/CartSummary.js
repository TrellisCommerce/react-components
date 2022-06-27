import React from 'react';
import PropTypes from 'prop-types';
import { Pricing } from '../Pricing';
import clsx from 'clsx';
import NumberInput from '../NumberInput/NumberInput';

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
    <div className={clsx(classNames?.root)}>
      <header className="grid grid-cols-[4fr,1fr,1fr] border-b border-solid border-gray-300 pb-6">
        <h5 className="">Item</h5>
        <h5 className="">{quantityLabel}</h5>
        <h5 className="">Price</h5>
      </header>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'grid grid-cols-[4fr,1fr,1fr] border-b border-gray-300 py-6',
            classNames?.itemContainer,
          )}
        >
          <div className="flex items-center">
            {item.Image && <item.Image />}
            {!item.Image && item.imageUrl && (
              <img
                src={item.imageUrl}
                className={clsx(
                  'max-w-[100px] max-h-[100px] mr-5',
                  classNames?.image,
                )}
              />
            )}
            <div>
              <p className={clsx('font-bold', classNames?.productTitle)}>
                {item.title}
              </p>
              <p
                className={clsx(
                  'text-sm text-gray-900 font-light',
                  classNames?.variantTitle,
                )}
              >
                {item.variantTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:flex-grow px-2">
              {isReadOnly ? (
                <p
                  className={clsx(
                    'text-sm text-gray-500',
                    classNames?.quantityLabel,
                  )}
                >
                  {item.quantity}
                </p>
              ) : (
                <div className="flex items-center">
                  <NumberInput
                    classNames={classNames}
                    onChange={onChange}
                    elementId={item.id}
                    value={item.quantity}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className={clsx(
              'flex items-center justify-between',
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
                className={clsx('p-2', classNames?.removeButton)}
                onClick={() => onRemove(item.id)}
              >
                ｘ
              </button>
            )}
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

		* `Image: Image component such as 'next/image' to override imageUrl`
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
      Image: PropTypes.func,
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
