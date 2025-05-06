import { Metadata } from "next";
export default function Page() {
  return (
    <section className="w-full">
      <h2 className="lex justify-between items-center border-b border-border p-3">
        Visitors
      </h2>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visitors",
    description: "Visitors",
  };
}
