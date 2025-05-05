import { Metadata } from "next";
export default function Page() {
  return (
    <section className="w-full">
      <h2 className="p-6 border-b border-[#E1E1E1]">Visitors</h2>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visitors",
    description: "Visitors",
  };
}
