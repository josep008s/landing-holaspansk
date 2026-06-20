The signature "¿Vienes?" email capture — a pill input that focuses to sea-blue with a Rojo submit, resolving to a warm Spanish success message.

```jsx
<NewsletterForm
  placeholder="din e-post"
  buttonLabel="Kom nærmere"
  onSubmit={(email) => subscribe(email)}
/>
```

- Customise `placeholder`, `buttonLabel`, `successTitle`, `successBody`.
- `onSubmit(email)` fires on a valid address; the component then shows the success state itself.
