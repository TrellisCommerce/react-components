import React, { useState } from 'react';
import classnames from 'classnames';
import { RadioGroup } from '@headlessui/react';

const VariantSelector = ({ classNames, typeLabel, isColor, variants }) => {
  const [selectedVariantId, setSelectedVariantId] = useState();

  return (
    <>
      <div>
        {isColor ? (
          <>
            <h3 className="text-sm text-gray-900 font-medium">{typeLabel}</h3>
            <RadioGroup
              onChange={setSelectedVariantId}
              value={selectedVariantId}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                Choose a {typeLabel}
              </RadioGroup.Label>
              <div className="flex items-center space-x-3">
                {variants.map((variant) => (
                  <RadioGroup.Option
                    key={variant.id}
                    value={variant.id}
                    disabled={!variant.isEnabled}
                    className={({ active, checked }) =>
                      classnames(
                        variant.isEnabled ? '' : 'cursor-not-allowed',
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                      )
                    }
                  >
                    <RadioGroup.Label as="p" className="sr-only">
                      {typeLabel}
                    </RadioGroup.Label>

                    <span
                      aria-hidden="true"
                      className={classnames(
                        'h-8 w-8 border border-black border-opacity-10 rounded-full',
                      )}
                      style={{ backgroundColor: variant.color }}
                    />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </>
        ) : (
          <div className="">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-900 font-medium">size</h3>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Size guide
              </a>
            </div>

            <RadioGroup
              value={selectedVariantId}
              onChange={setSelectedVariantId}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                Choose a {typeLabel}
              </RadioGroup.Label>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {variants.map((variant) => (
                  <RadioGroup.Option
                    key={variant.id}
                    value={variant.id}
                    disabled={!variant.isEnabled}
                    className={({ active }) =>
                      classnames(
                        variant.isEnabled
                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                        active ? 'ring-2 ring-indigo-500' : '',
                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <RadioGroup.Label as="p">
                          {variant.name}
                        </RadioGroup.Label>
                        {variant.isEnabled ? (
                          <div
                            className={classnames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-indigo-500'
                                : 'border-transparent',
                              'absolute -inset-px rounded-md pointer-events-none',
                            )}
                            aria-hidden="true"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                          >
                            <svg
                              className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
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
          </div>
        )}
      </div>
    </>
  );
};

export default VariantSelector;
