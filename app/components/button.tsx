interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded storybook-button--${size} ${mode}`}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
}