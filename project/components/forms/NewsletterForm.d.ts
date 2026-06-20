import * as React from 'react';

/**
 * The signature "¿Vienes?" newsletter capture — a pill input + Rojo submit
 * that resolves to a warm Spanish success state.
 *
 * @startingPoint section="Forms" subtitle="Newsletter email capture with success state" viewport="700x140"
 */
export interface NewsletterFormProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder?: string;
  buttonLabel?: string;
  successTitle?: string;
  successBody?: string;
  /** Called with the email string on a valid submit. */
  onSubmit?: (email: string) => void;
}

export function NewsletterForm(props: NewsletterFormProps): JSX.Element;
