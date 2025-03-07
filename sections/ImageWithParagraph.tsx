import { useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Product {
  image: ImageWidget;
  title: string;
  price: string;
  installments: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  promoImage?: ImageWidget;
  products?: Product[];
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
    title: "Pellonil para Carbones Aniquales Fabrey",
    price: "R$ 129,00",
    installments: "até 3x sem juros",
  },
  {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
    title: "Pellonil Aniquale Sutherland para carbones Voyage",
    price: "R$ 179,00",
    installments: "até 3x sem juros",
  },
];

export default function ProductSection({
  title = "Passeios mais leves",
  subtitle = "O pedroal perfeito para carbonres que param",
  promoImage =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
  products = DEFAULT_PRODUCTS,
}: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12">
      {/* Título e Subtítulo */}
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-black">{title}</h1>
        <p class="text-xl md:text-2xl text-black">{subtitle}</p>
      </div>

      {/* Botão */}
      <div class="text-center mb-12">
        <a
          href="#"
          class="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors"
        >
          VER ANTIPUXÕES
        </a>
      </div>

      {/* Lista de Produtos e Arte de Propaganda */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Arte de Propaganda */}
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <Image
            width={640}
            height={640}
            class="w-full h-full object-cover rounded-lg"
            src={promoImage}
            alt="Arte de propaganda"
            decoding="async"
            loading="lazy"
          />
        </div>

        {/* Produtos */}
        {products.map((product) => (
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            {/* Imagem do Produto */}
            <Image
              width={640}
              height={640}
              class="w-full h-64 object-cover rounded-lg"
              src={product.image}
              alt={product.title}
              decoding="async"
              loading="lazy"
            />

            {/* Detalhes do Produto */}
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-4 text-black">{product.title}</h2>
              <p class="text-2xl font-bold mb-4 text-black">{product.price}</p>
              <p class="text-gray-600 mb-6">{product.installments}</p>

              {/* Botão de Adicionar ao Carrinho */}
              <button
                onClick={handleAddToCart}
                class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carrinho (Overlay e Sidebar) */}
      {isCartOpen && (
        <>
          {/* Overlay Escuro */}
          <div
            class="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Sidebar do Carrinho */}
          <div class="fixed inset-y-0 left-0 w-96 bg-white z-50 p-6 shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-black">Carrinho</h2>
            <p class="text-gray-600">Seu carrinho está vazio.</p>
            <button
              onClick={() => setIsCartOpen(false)}
              class="bg-black text-white px-6 py-2 rounded-lg mt-4 hover:bg-gray-900 transition-colors"
            >
              Fechar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}