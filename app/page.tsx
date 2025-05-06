import { Metadata } from "next";
export default function Page() {
  return (
    <section className="w-full">
      <h2 className="flex justify-between items-center border-b border-border p-3">
        Home
      </h2>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Home",
  };
}
