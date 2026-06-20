import * as React from 'react';

/** A big outline-stroke pillar word with numeral + description; fills on hover. */
export interface PillarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Roman numeral marker, e.g. "i." */
  numeral?: string;
  /** The pillar word, e.g. "Kultur". */
  word: string;
  /** Stroke / fill colour. Default Amarillo. */
  color?: string;
  /** Description text. */
  children?: React.ReactNode;
}

export function Pillar(props: PillarProps): JSX.Element;
