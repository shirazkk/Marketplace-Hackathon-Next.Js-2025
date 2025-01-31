import SupportContent from "@/components/supportContent/page";
import { notFound } from "next/navigation";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Check if the slug is valid, otherwise return 404
  const validSlugs = [
    "help-and-support",
    "terms-and-condition",
    "privacy-policy",
    "help",
  ];
  if (!validSlugs.includes(slug)) return notFound();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <SupportContent slug={slug} />
      </div>
    </div>
  );
}
