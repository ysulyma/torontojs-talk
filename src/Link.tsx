/** Make link open in new window. */
export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" {...props} />;
}