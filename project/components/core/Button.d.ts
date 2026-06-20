import * as React from 'react';

/**
 * Pill-shaped brand button — warm, confident, never corporate.
 *
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost / sun pill button" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary" (Rojo). */
  variant?: 'primary' | 'secondary' | 'ghost' | 'sun';
  /** Size. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Append a → arrow (used on CTAs like "¿Vienes? →"). */
  arrow?: boolean;
  /** Render as a different element, e.g. "a" for links. Default "button". */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
