export type CardProps = {
  step: string;
  title: string;
  highlight: string;
  description: string;
};

export function Card({ step, title, highlight, description }: CardProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{step}</div>
    </div>
  );
}
