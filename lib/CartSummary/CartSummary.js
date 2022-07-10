import React from 'react';
import PropTypes from 'prop-types';
import { Pricing } from '../Pricing';
import clsx from 'clsx';
import NumberInput from '../NumberInput/NumberInput';
import { firstItemInAnObject } from "../utils";

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
      <header className="grid grid-cols-[.1fr,3.9fr,1fr,1fr] border-solid border-gray-300 pb-6 invisible lg:visible w-11/12">
        <h5 className="lg:mr-24">Item</h5>
        <h5 className=""/>
        <h5 className="">{quantityLabel}</h5>
        <h5 className="">Price</h5>
      </header>
      {cartItems?.map((item) => (
        <div  key={item.id} className={clsx('flex border-b border-gray-300', (firstItemInAnObject(cartItems).id === item.id) && 'border-t')}>
          <div
            className={clsx(
              'grid row-end-auto grid-cols-[.1fr,3.9fr,1fr,1fr] py-3 w-11/12' ,
              classNames?.itemContainer,
            )}
          >
            <div className="flex items-center lg:row-span-1 row-span-3 mr-3 order-1">
              {item.Image && <item.Image />}
              {!item.Image && item.imageUrl && (
                <img
                  src={item.imageUrl}
                  className={clsx(
                    'max-w-[123px] max-h-[144px]',
                    classNames?.image,
                  )}
                 />
              )}
              <div>
              </div>
            </div>
            <div className="flex items-center justify-start lg:col-span-1 col-span-3 order-2">
              <div>
                <p className={clsx('font-bold leading-6 text-[18px]', classNames?.productTitle)}>
                  {item.title}
                </p>
                <p
                  className={clsx(
                    'text-sm text-gray-900 font-light leading-6',
                    classNames?.variantTitle,
                  )}
                >
                  {item.variantTitle}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start lg:col-span-1 col-span-3 lg:order-3 order-4">
              <div className="md:flex-grow lg:px-2">
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
                  <div className="flex">
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
            <div className="flex items-center justify-start lg:col-span-1 col-span-3 order-3 lg:order-4">
              <div
                className={clsx(
                  'flex items-center leading-4',
                  classNames?.pricingContainer,
                )}
              >
                <Pricing
                  originalPrice={item.originalPrice}
                  promotionalPrice={item.promotionalPrice}
                  classNames={classNames?.pricing}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end row-span-3 justify-center order-5">
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
