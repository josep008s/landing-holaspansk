import * as React from 'react';

/**
 * The star "Palabras con Alma" unit — an untranslatable Spanish word in
 * Fraunces italic on the sun-warm gradient, over the dark ink surface.
 *
 * @startingPoint section="Editorial" subtitle="Palabras con Alma — untranslatable-word feature" viewport="700x460"
 */
export interface PalabraCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The Spanish word (sobremesa, duende, morriña…). */
  word?: string;
  /** Emotional Spanish definition — the jewel. */
  meaning?: string;
  /** Norwegian explanation — the bridge. */
  bridge?: string;
  /** Poetic closing line (Cielo melocotón). */
  close?: string;
  /** Overline label. Default "Palabras con Alma". */
  label?: string;
}

export function PalabraCard(props: PalabraCardProps): JSX.Element;
