import { action } from '@storybook/addon-actions';

type StoryLinkWrapperProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  to?: string;
};

const fireClickAction = action('onLinkClick');

export function StoryLinkWrapper({
  children,
  className,
  href,
  onClick,
  to,
  ...rest
}: StoryLinkWrapperProps) {
  const modifiedOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    // onClick();
    onClick?.();
    fireClickAction(href || to);
  };

  return (
    <a
      className={className}
      href={href || to}
      onClick={modifiedOnClick}
      {...rest}
    >
      {children}
    </a>
  );
}
