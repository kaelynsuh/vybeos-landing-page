export type CardProps = {
  step: string;
  title: string;
  description: string;
};

export function Card({ step, title, description }: CardProps) {
  /**
   * Renders the title with one word per line
   * - *word* renders in brand-primary color
   * - Single characters stay attached to previous word (e.g. "Learn +")
   */
  const renderTitle = () => {
    const words = title.replace(/ (\S)(?=\s|$)/g, "\u00A0$1").split(" ");

    return words.map((word, i) => (
      <span key={i}>
        {word.startsWith("*") && word.endsWith("*") ? (
          <span className="text-brand-primary">{word.slice(1, -1)}</span>
        ) : (
          word
        )}
        {i < words.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="relative flex w-[294px] h-[500px] border border-dark-gray p-3 md:my-3">
      <div
        className="absolute top-0 left-0 size-[14px] bg-brand-primary"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="flex flex-col bg-brand-secondary px-2 py-[6px]">
        <h3
          className="flex flex-col justify-center items-center size-[252px] bg-background font-display text-4xl"
          style={{
            clipPath: "polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)",
          }}
        >
          {renderTitle()}
        </h3>
        <div className="pt-[22px] px-4 font-medium">{description}</div>
        <div className="mt-auto flex justify-end font-display font-semibold text-default">
          <div className="flex items-center justify-center bg-brand-primary border-2 rounded-md border-default size-[40px]">
            {step}
          </div>
        </div>
      </div>
    </div>
  );
}
