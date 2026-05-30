import { recipes } from "@/data/recipes";
import RecipeDetailClient from "@/components/RecipeDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} ${recipe.titleItalic} — Las Cookies de Lucas & Nao`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <RecipeDetailClient recipe={recipe} />
    </div>
  );
}
