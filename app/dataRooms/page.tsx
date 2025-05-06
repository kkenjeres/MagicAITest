import { Metadata } from "next";
export default function Page() {
  return (
    <section className="w-full">
      <h2 className="lex justify-between items-center border-b border-[#E1E1E1] p-3">
        Data rooms
      </h2>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Data Rooms",
    description: "Data Rooms",
  };
}
