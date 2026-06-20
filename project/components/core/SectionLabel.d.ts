import * as React from 'react';

/** Uppercase tracked overline that titles a section, with optional gradient divider. */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent colour. Default "naranja". */
  tone?: 'naranja' | 'rojo' | 'sea' | 'soft';
  /** Show the rojo→amarillo gradient divider beneath. Default false. */
  divider?: boolean;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
