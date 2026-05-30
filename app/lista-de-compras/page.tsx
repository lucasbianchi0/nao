import ShoppingListClient from "@/components/ShoppingListClient";

export const metadata = {
  title: "Lista de compras — Las Cookies de Lucas & Nao",
  description: "Todos los ingredientes y cantidades para las 3 recetas juntas.",
};

export default function ShoppingListPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <ShoppingListClient />
    </div>
  );
}
