import { Arrow } from "./Arrow";
import { Card, CardProps } from "./Card";

// Card content data — use *word* syntax to highlight words in brand-primary color
const cardData: CardProps[] = [
  {
    step: "01",
    title: "Train Your *Brand* *Memory*",
    description:
      "Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.",
  },
  {
    step: "02",
    title: "Generate With *Precision*",
    description:
      "Create complete campaigns in one click. Every line and layout stays true to your brand's identity, handcrafted quality, automated delivery.",
  },
  {
    step: "03",
    title: "Learn + Refine *Safely*",
    description:
      "Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.",
  },
];

export function HowItWorks() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-display mb-[40px] lg:mb-[30px] text-4xl lg:text-3xl">
          How It Works
        </h2>
        <p className="text-center max-w-[480px] text-white mb-15 lg:mb-20 px-6 lg:px-0 ">
          VybeOS keeps your brand safe and precise, every step of the loop is
          built to protect your tone, your visuals, and your standards.
        </p>
      </div>

      {/* Outer wrapper: border color background + 1px padding for the border effect */}
      <div
        className="w-[calc(100vw-48px)] min-[1478px]:w-[1430px] mx-auto bg-dark-gray p-px"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
        }}
      >
        {/* Content layer */}
        <div
          className="flex flex-col md:flex-row md:flex-wrap min-[1180px]:flex-nowrap items-center justify-center py-12"
          style={{
            background: "var(--background-gradient)",
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={card.step}
              className="flex flex-col md:flex-row items-center"
            >
              <Card {...card} />
              {index < cardData.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
