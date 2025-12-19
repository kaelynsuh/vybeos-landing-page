import { HowItWorks } from "./components/HowItWorks";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center font-body py-16 sm:py-20 md:py-22 lg:py-24">
      <h1 className="sr-only">Landing Page</h1>
      <HowItWorks />
    </main>
  );
}
