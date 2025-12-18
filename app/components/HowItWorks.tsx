import { Arrow } from "./Arrow";
import { Card, CardProps } from "./Card";

const cardData: CardProps[] = [
  {
    step: "01",
    title: "Train Your Brand Memory",
    highlight: "Brand Memory",
    description:
      "Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.",
  },
  {
    step: "02",
    title: "Generate With Precision",
    highlight: "Precision",
    description:
      "Create complete campaigns in one click. Every line and layout stays true to your brand's identity, handcrafted quality, automated delivery.",
  },
  {
    step: "03",
    title: "Learn + Refine Safely",
    highlight: "Safely",
    description:
      "Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.",
  },
];

export function HowItWorks() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-[80px]">
        <h3 className="font-display text-4xl font-semibold mb-[30px]">
          How It Works
        </h3>
        <p className="text-center max-w-[480px]">
          VybeOS keeps your brand safe and precise, every step of the loop is
          built to protect your tone, your visuals, and your standards.
        </p>
      </div>

      <div
        className="flex border border-[#3E3F3E] w-[1430px] h-[600px]"
        style={{
          background: "var(--background-gradient)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
        }}
      >
        {cardData.map((card, index) => (
          <div key={card.step} className="flex items-center">
            <Card {...card} />
            {index < cardData.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </section>
  );
}
