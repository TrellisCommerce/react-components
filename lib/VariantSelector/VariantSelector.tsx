import React, { useState } from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
import { generateClasses } from '../utils';

interface ClassNames {
  headingTypeLabel?: string;
  radioGroup?: string;
  radioGroupLabel?: string;
  radioGroupOptionsWrapper?: string;
  radioGroupOption?: string;
  colorLabel?: string;
  colorSpan?: string;
  disabledColorSVG?: string;
  headingContainer?: string;
  headingSizeGuideLabel?: string;
  radioGroupOptionLabel?: string;
  radioGroupOptionItem?: string;
  disabledRadioGroupOptionItem?: string;
  disabledSVG?: string;
}

interface Variant {
  color: string;
  isEnabled: string;
  id: string;
  name: string;
}

interface Props {
  classNames?: ClassNames;
  typeLabel: string;
  isColor: boolean;
  hasSizeGuide: boolean;
  OverrideClasses: boolean;
  variants: Variant[];
  onSelection: (value: number) => {};
}

const VariantSelector: React.FC<Props> = ({
  classNames = {},
  typeLabel,
  isColor,
  hasSizeGuide,
  variants,
  onSelection,
  OverrideClasses,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState();

  return (
    <>
      {isColor ? (
        <>
          <h3
            className={clsx(
              generateClasses(
                'text-sm text-gray-900 font-medium',
                classNames.headingTypeLabel,
                OverrideClasses,
              ),
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
              className={clsx(
                generateClasses(
                  'sr-only',
                  classNames.radioGroupLabel,
                  OverrideClasses,
                ),
              )}
            >
              Choose a {typeLabel}
            </RadioGroup.Label>
            <div
              className={clsx(
                generateClasses(
                  'flex items-center space-x-3',
                  classNames.radioGroupOptionsWrapper,
                  OverrideClasses,
                ),
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
                        ? 'bg-white text-gray-900 cursor-pointer'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      checked ? 'ring ring-offset-2 ring-gray-500' : '',
                      '-m-0.5 relative p-0.5 flex items-center justify-center focus:outline-none',
                      classNames.radioGroupOption,
                    )
                  }
                >
                  {variant.isEnabled ? (
                    <>
                      <RadioGroup.Label
                        as="p"
                        className={clsx(
                          generateClasses(
                            'sr-only',
                            classNames.colorLabel,
                            OverrideClasses,
                          ),
                        )}
                      >
                        {typeLabel}
                      </RadioGroup.Label>

                      <span
                        aria-hidden="true"
                        className={clsx(
                          generateClasses(
                            'h-8 w-8 border border-black border-opacity-10',
                            classNames.colorSpan,
                            OverrideClasses,
                          ),
                        )}
                        style={{ backgroundColor: variant.color }}
                      />
                    </>
                  ) : (
                    <svg
                      className={clsx(
                        generateClasses(
                          'h-8 w-8 opacity-30	 border border-Gray-800',
                          classNames.disabledColorSVG,
                          OverrideClasses,
                        ),
                      )}
                      style={{ backgroundColor: variant.color }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line
                        stroke="black"
                        strokeWidth="1.3"
                        x1={0}
                        y1={100}
                        x2={100}
                        y2={0}
                        vectorEffect="non-scaling-stroke"
                      />
                      <line
                        stroke="black"
                        strokeWidth="1.3"
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
              generateClasses(
                'flex items-center justify-between',
                classNames.headingContainer,
                OverrideClasses,
              ),
            )}
          >
            <h3
              className={clsx(
                generateClasses(
                  'text-sm text-gray-900 font-medium',
                  classNames.headingTypeLabel,
                  OverrideClasses,
                ),
              )}
            >
              {typeLabel}
            </h3>
            {hasSizeGuide && (
              <a
                href="#"
                className={clsx(
                  generateClasses(
                    'text-sm font-medium text-indigo-600 hover:text-indigo-500',
                    classNames.headingSizeGuideLabel,
                    OverrideClasses,
                  ),
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
            className={clsx(
              generateClasses(
                'mt-6 max-w-xs',
                classNames.radioGroup,
                OverrideClasses,
              ),
            )}
          >
            <RadioGroup.Label
              className={clsx(
                generateClasses(
                  'sr-only',
                  classNames.radioGroupLabel,
                  OverrideClasses,
                ),
              )}
            >
              Choose a {typeLabel}
            </RadioGroup.Label>
            <div
              className={clsx(
                generateClasses(
                  'grid grid-cols-[repeat(15,_minmax(max-content,_auto))] gap-4 auto-rows-max',
                  classNames.radioGroupOptionsWrapper,
                  OverrideClasses,
                ),
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
                        ? 'bg-white text-gray-900 cursor-pointer'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      checked ? 'ring ring-offset-2 ring-gray-500' : '',
                      'py-2 px-3 group relative border hover:bg-gray-50 focus:outline-none sm:flex-1',
                      classNames.radioGroupOption,
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label
                        className={clsx(
                          generateClasses(
                            'font-light text-sm uppercase',
                            classNames.radioGroupOptionLabel,
                            OverrideClasses,
                          ),
                        )}
                        as="p"
                      >
                        {variant.name}
                      </RadioGroup.Label>
                      {variant.isEnabled ? (
                        <div
                          className={clsx(
                            generateClasses(
                              'border absolute -inset-px pointer-events-none',
                              classNames.radioGroupOptionItem,
                              OverrideClasses,
                            ),
                          )}
                          aria-hidden="true"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className={clsx(
                            generateClasses(
                              'absolute -inset-px border-2 border-gray-200 pointer-events-none',
                              classNames.disabledRadioGroupOptionItem,
                              OverrideClasses,
                            ),
                          )}
                        >
                          <svg
                            className={clsx(
                              generateClasses(
                                'absolute inset-0 w-full h-full text-gray-200 stroke-2 	',
                                classNames.disabledSVG,
                                OverrideClasses,
                              ),
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
