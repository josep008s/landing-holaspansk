import * as React from 'react';

/** Small pill label — brand phrases, categories, "turista vs vecino" chips. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour tone. Default "neutral". */
  tone?: 'neutral' | 'rojo' | 'sun' | 'sea' | 'firma';
  /** Filled (solid colour, white text) vs tinted background. Default false. */
  solid?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
