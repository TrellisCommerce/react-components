import React from 'react';
import PropTypes from 'prop-types';
import { Pricing } from '../Pricing';
import clsx from 'clsx';
import NumberInput from '../NumberInput/NumberInput';
import { firstItemInAnObject } from '../utils';
import { generateClasses } from '../utils';
import {Field} from "../utils/types";
import {PricingClassNames} from '../utils/types'


interface ClassNames {
  root?: string
  image?: string
  productTitle?: string
  variantTitle?: string
  quantityLabel?: string
  pricingContainer?: string
  removeButton?: string
  pricing?: PricingClassNames
  itemContainer?: string
  field?: Field
}

interface CartItem {
  id: string,
  Image: string,
  imageUrl: string
  imageAlt: string
  title: string
  variantTitle: string
  quantity: number
  originalPrice: string
  promotionalPrice: string
  pricing: string
}

interface Props {
  classNames: ClassNames,
  cartItems: CartItem[]
  quantityLabel: string
  removeLabel: string
  onRemove: (id: string) => {}
  isReadOnly: boolean
  OverrideClasses?: boolean
  onChange: (id: string, quantity: number) => {}
}

const CartSummary: React.FC<Props> = (props) => {
  const {
    classNames,
    cartItems,
    quantityLabel,
    isReadOnly,
    onChange,
    onRemove,
    OverrideClasses
  } = props;

  return (
    <div className={clsx(classNames?.root)}>
      <header className="grid grid-cols-[.1fr,3.9fr,1fr,1fr] border-solid border-gray-300 pb-6 invisible lg:visible w-11/12">
        <h5 className="lg:mr-24">Item</h5>
        <h5 className="" />
        <h5 className="">{quantityLabel}</h5>
        <h5 className="">Price</h5>
      </header>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'flex border-b border-gray-300',
            firstItemInAnObject(cartItems).id === item.id && 'border-t',
          )}
        >
          <div
            className={clsx(
              generateClasses(
                'grid row-end-auto grid-cols-[.1fr,3.9fr,1fr,1fr] py-3 w-11/12',
                classNames?.itemContainer,
                OverrideClasses
              ),
            )}
          >
            <div className="flex items-center lg:row-span-1 row-span-3 mr-3 order-1">
              {item.Image && <item.Image />}
              {!item.Image && item.imageUrl && (
                <img
                  alt={item.imageAlt || item.title}
                  src={item.imageUrl}
                  className={clsx(
                    generateClasses(
                    'max-w-[123px] max-h-[144px]',
                    classNames?.image,
                      OverrideClasses
                    )
                  )}
                />
              )}
            </div>
            <div
              className={clsx(
                'flex items-center justify-start lg:col-span-1 col-span-3 order-2',
              )}
            >
              <div>
                <p
                  className={clsx(
                    generateClasses(
                      'font-bold leading-6 text-[18px]',
                      classNames?.productTitle,
                      OverrideClasses
                    ),
                  )}
                >
                  {item.title}
                </p>
                <p
                  className={clsx(
                    generateClasses(
                      'text-sm text-gray-900 font-light leading-6',
                      classNames?.variantTitle,
                      OverrideClasses
                    ),
                  )}
                >
                  {item.variantTitle}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                'flex items-center justify-start lg:col-span-1 col-span-3 lg:order-3 order-4',
              )}
            >
              <div className="md:flex-grow lg:px-2">
                {isReadOnly ? (
                  <p
                    className={clsx(
                      generateClasses(
                        'text-sm text-gray-500',
                        classNames?.quantityLabel,
                        OverrideClasses
                      ),
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
            <div
              className={clsx(
                'flex items-center justify-start lg:col-span-1 col-span-3 order-3 lg:order-4',
              )}
            >
              <div
                className={clsx(
                  generateClasses(
                    'flex items-center leading-4',
                    classNames?.pricingContainer,
                    OverrideClasses
                  ),
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
                className={clsx(
                  generateClasses('p-2', classNames?.removeButton, OverrideClasses),
                )}
                onClick={() => onChange(item.id, item.quantity)}
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

CartSummary.defaultProps = {
  quantityLabel: 'Qty:',
  isReadOnly: true,
  onChange: (id, quantity) => ({ id, quantity }),
  onRemove: (id: string) => ({ id }),
  removeLabel: 'Remove',
};

export default CartSummary;
