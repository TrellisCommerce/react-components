import React, { useCallback } from 'react';

export default function useMergedStyles(
  classNames: any,
  defaultStyles: any,
  { overrideDefaults = false }: { overrideDefaults: boolean; },
) {
  return useCallback(
    (key: string) => {
      if (overrideDefaults) {
        return classNames?.[key];
      }

      if (!classNames?.[key]) return defaultStyles[key];

      return `${classNames[key]} ${defaultStyles[key]}`;
    },
    [classNames, defaultStyles, overrideDefaults],
  );
}
