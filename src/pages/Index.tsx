import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "img/fc053ecc-3d1c-4d6a-a831-c5646295e6c6.jpg",
      alt: "Hello Kitty для Хадижы",
      caption: "Ты как Hello Kitty - всегда милая и добрая! 🐱",
    },
    {
      id: 2,
      src: "img/5a78fd80-d0c9-4fea-9fbb-9d661e1e5310.jpg",
      alt: "Дружба и сердечки",
      caption: "Наша дружба - это самое драгоценное! 💕",
    },
    {
      id: 3,
      src: "img/c0277b01-203f-4c2f-b1b7-d31a91c95165.jpg",
      alt: "Теплые слова",
      caption: "Ты освещаешь мир своей добротой ✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-mint-50 to-cream-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-charcoal font-caveat">
            Для моей дорогой Хадижы 💖
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ты самая лучшая, добрая и замечательная подруга! Твоя улыбка делает
            мир ярче, а твоё сердце согревает всех вокруг. Спасибо за то, что ты
            есть в моей жизни! 🌟
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover-scale transition-all duration-300 hover:shadow-xl border-2 border-pink-100 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Heart" className="w-6 h-6 mb-2 text-pink-300" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-center text-gray-700 font-medium leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Message */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-100 shadow-lg animate-fade-in">
          <div className="flex justify-center mb-6">
            <Icon
              name="Heart"
              className="w-12 h-12 text-pink-400 animate-pulse"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-charcoal font-caveat">
            Хадижа Абдурахменова
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ты не просто подруга - ты семья, которую я выбрала сердцем. Твоя
            искренность, твоя забота, твоя способность всегда поддержать - это
            делает тебя особенной. Пусть каждый день приносит тебе радость, как
            ты приносишь радость в мою жизнь!
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">🦋</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">🌈</span>
            <span className="text-2xl">💕</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p className="font-caveat text-lg">С любовью и теплом 💖</p>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
            >
              <Icon name="X" className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
