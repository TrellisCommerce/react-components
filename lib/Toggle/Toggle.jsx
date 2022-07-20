import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import useMergedStyles from '../hooks/useMergedStyles';

const defaultStyles = {
  switch: 'relative inline-flex items-center h-6 rounded-full w-10',
  switchEnabled: 'bg-blue-600',
  switchDisabled: 'bg-gray-200',
  label: 'inline-block w-4 h-4 transform bg-white rounded-full',
  labelEnabled: 'translate-x-5',
  labelDisabled: 'translate-x-1',
};

function Toggle({ classNames = {}, label = '', overrideDefaults = false }) {
  const [enabled, setEnabled] = useState(false);

  const getMergedStyles = useMergedStyles(classNames, defaultStyles, {
    overrideDefaults,
  });

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled
          ? getMergedStyles('switchEnabled')
          : getMergedStyles('switchDisabled')
      } ${getMergedStyles('switch')}`}
    >
      <span className="sr-only">{label}</span>
      <span
        className={`${
          enabled
            ? getMergedStyles('labelEnabled')
            : getMergedStyles('labelDisabled')
        } ${getMergedStyles('label')}`}
      />
    </Switch>
  );
}

export default Toggle;
