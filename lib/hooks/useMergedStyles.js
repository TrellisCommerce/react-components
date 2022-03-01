import React, { useCallback } from 'react';

export default function useMergedStyles(
  classNames,
  defaultStyles,
  { overrideDefaults = false },
) {
  const getMergedStyles = useCallback(
    (key) => {
      if (overrideDefaults) {
        return classNames?.[key];
      }

      if (!classNames?.[key]) return defaultStyles[key];

      return `${classNames[key]} ${defaultStyles[key]}`;
    },
    [classNames, defaultStyles, overrideDefaults],
  );

  return getMergedStyles;
}
