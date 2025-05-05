import { Metadata } from "next";
import { Library } from "Library";
export default function Page() {
  return <Library />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Library",
    description: "Library",
  };
}
