import React, { useState } from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';

const VariantSelector = ({
  classNames = {},
  typeLabel,
  isColor,
  hasSizeGuide,
  variants,
  onSelection,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState();

  return (
    <>
      {isColor ? (
        <>
          <h3
            className={clsx(
              'text-sm text-gray-900 font-medium',
              classNames.headingTypeLabel,
            )}
          >
            {typeLabel}
          </h3>
          <RadioGroup
            onChange={(value) => {
              setSelectedVariantId(value);
              onSelection(value);
            }}
            value={selectedVariantId}
            className={clsx('mt-4', classNames.radioGroup)}
          >
            <RadioGroup.Label
              className={clsx('sr-only', classNames.radioGroupLabel)}
            >
              Choose a {typeLabel}
            </RadioGroup.Label>
            <div
              className={clsx(
                'flex items-center space-x-3',
                classNames.radioGroupOptionsWrapper,
              )}
            >
              {variants.map((variant) => (
                <RadioGroup.Option
                  key={variant.id}
                  value={variant.id}
                  disabled={!variant.isEnabled}
                  className={({ active, checked }) =>
                    clsx(
                      variant.isEnabled
                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center  focus:outline-none',
                      classNames.radioGroupOption,
                    )
                  }
                >
                  {variant.isEnabled ? (
                    <>
                      <RadioGroup.Label
                        as="p"
                        className={clsx('sr-only', classNames.colorLabel)}
                      >
                        {typeLabel}
                      </RadioGroup.Label>

                      <span
                        aria-hidden="true"
                        className={clsx(
                          'h-8 w-8 border border-black border-opacity-10 rounded-full',
                          classNames.colorSpan,
                        )}
                        style={{ backgroundColor: variant.color }}
                      />
                    </>
                  ) : (
                    <svg
                      className={clsx(
                        'h-8 w-8 opacity-30	 border border-Gray-800 rounded-full',
                        classNames.disabledColorSVG,
                      )}
                      style={{ backgroundColor: variant.color }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line
                        stroke="black"
                        stroke-width="1.3"
                        x1={0}
                        y1={100}
                        x2={100}
                        y2={0}
                        vectorEffect="non-scaling-stroke"
                      />
                      <line
                        stroke="black"
                        stroke-width="1.3"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={100}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </>
      ) : (
        <>
          <div
            className={clsx(
              'flex items-center justify-between',
              classNames.headingContainer,
            )}
          >
            <h3
              className={clsx(
                'text-sm text-gray-900 font-medium',
                classNames.headingTypeLabel,
              )}
            >
              {typeLabel}
            </h3>
            {hasSizeGuide && (
              <a
                href="#"
                className={clsx(
                  'text-sm font-medium text-indigo-600 hover:text-indigo-500',
                  classNames.headingSizeGuideLabel,
                )}
              >
                Size guide
              </a>
            )}
          </div>

          <RadioGroup
            value={selectedVariantId}
            onChange={(value) => {
              setSelectedVariantId(value);
              onSelection(value);
            }}
            className={clsx('mt-4', classNames.radioGroup)}
          >
            <RadioGroup.Label
              className={clsx('sr-only', classNames.radioGroupLabel)}
            >
              Choose a {typeLabel}
            </RadioGroup.Label>
            <div
              className={clsx(
                'grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4',
                classNames.radioGroupOptionsWrapper,
              )}
            >
              {variants.map((variant) => (
                <RadioGroup.Option
                  key={variant.id}
                  value={variant.id}
                  disabled={!variant.isEnabled}
                  className={({ active }) =>
                    clsx(
                      variant.isEnabled
                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      active ? 'ring-2 ring-indigo-500' : '',
                      'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                      classNames.radioGroupOption,
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label
                        className={classNames.radioGroupOptionLabel}
                        as="p"
                      >
                        {variant.name}
                      </RadioGroup.Label>
                      {variant.isEnabled ? (
                        <div
                          className={clsx(
                            active ? 'border' : 'border-2',
                            checked
                              ? 'border-indigo-500'
                              : 'border-transparent',
                            'absolute -inset-px rounded-md pointer-events-none',
                            classNames.radioGroupOptionItem,
                          )}
                          aria-hidden="true"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className={clsx(
                            'absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none',
                            classNames.disabledRadioGroupOptionItem,
                          )}
                        >
                          <svg
                            className={clsx(
                              'absolute inset-0 w-full h-full text-gray-200 stroke-2 	',
                              classNames.disabledSVG,
                            )}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1={0}
                              y1={100}
                              x2={100}
                              y2={0}
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </>
      )}
    </>
  );
};

export default VariantSelector;
