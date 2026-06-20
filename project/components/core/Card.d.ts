import * as React from 'react';

/** Warm surface card with optional painted-image header. Soft elevation, lifts on hover. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional image URL for a 16:10 header that zooms slightly on hover. */
  image?: string;
  imageAlt?: string;
  /** Uppercase tracked eyebrow above the title (Naranja). */
  eyebrow?: string;
  /** Card title — rendered in Fraunces serif. */
  title?: string;
  /** Lift + zoom on hover. Default true. */
  hoverable?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
