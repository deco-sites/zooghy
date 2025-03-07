import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  image?: ImageWidget;
}

export default function HeroSection({
  title = "Passeios mais leves",
  subtitle = "O pedroal perfeito para cachorros que puxam",
  buttonText = "VER ANTIPUXÕES",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
}: Props) {
  return (
    <div class="w-full h-screen relative">
      {/* Imagem de fundo */}
      <Image
        width={1920}
        height={1080}
        class="w-full h-full object-cover rounded-lg"
        src={image}
        alt="Imagem de fundo"
        decoding="async"
        loading="lazy"
      />

      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div class="absolute inset-0 bg-black opacity-40"></div>

      {/* Conteúdo centralizado */}
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Título */}
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

        {/* Subtítulo */}
        <p class="text-xl md:text-2xl mb-8">{subtitle}</p>

        {/* Botão */}
        <a
          href="#"
          class="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}