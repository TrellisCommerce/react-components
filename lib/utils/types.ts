import React from "react";

export interface Field {
  root: string
  minus: string
  input: string
  plus: string
}

export interface Image {
  isPrimary: boolean
  imageUrl: string
  alt: string
  Image: React.FC
}

export interface PricingClassNames {
  promotional: string
  original: string
}