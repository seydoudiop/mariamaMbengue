import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductDetail from "./ProductDetail";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "cupcakes" | "cakes" | "donuts" | "tarts";
  ingredients?: string[];
  images?: string[];
}

interface ProductGalleryProps {
  products?: Product[];
}

const ProductGallery = ({
  products = defaultProducts,
}: ProductGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Délicieuses Pâtisseries
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez notre sélection de pâtisseries faites maison avec amour
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-4">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="rounded-full"
          >
            Tous
          </Button>
          <Button
            variant={selectedCategory === "cupcakes" ? "default" : "outline"}
            onClick={() => setSelectedCategory("cupcakes")}
            className="rounded-full"
          >
            Cupcakes
          </Button>
          <Button
            variant={selectedCategory === "cakes" ? "default" : "outline"}
            onClick={() => setSelectedCategory("cakes")}
            className="rounded-full"
          >
            Gâteaux
          </Button>
          <Button
            variant={selectedCategory === "donuts" ? "default" : "outline"}
            onClick={() => setSelectedCategory("donuts")}
            className="rounded-full"
          >
            Beignets
          </Button>
          <Button
            variant={selectedCategory === "tarts" ? "default" : "outline"}
            onClick={() => setSelectedCategory("tarts")}
            className="rounded-full"
          >
            Tartes
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Dialog key={product.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-gray-500">
                      {product.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 line-clamp-2">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 border-t">
                    <p className="text-lg font-semibold text-primary">
                      {product.price.toLocaleString()} FCFA
                    </p>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl">
                <ProductDetail product={product} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Cupcake Chocolat",
    description:
      "Délicieux cupcake au chocolat avec glaçage à la crème au beurre et pépites de chocolat.",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
    category: "cupcakes",
    ingredients: [
      "Farine",
      "Sucre",
      "Beurre",
      "Œufs",
      "Chocolat noir",
      "Levure",
    ],
    images: [
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800&q=80",
    ],
  },
  {
    id: "2",
    name: "Gâteau d'Anniversaire",
    description:
      "Gâteau personnalisé pour toutes les occasions avec décorations sur mesure et votre message préféré.",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "cakes",
    ingredients: [
      "Farine",
      "Sucre",
      "Beurre",
      "Œufs",
      "Lait",
      "Vanille",
      "Levure",
    ],
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
    ],
  },
  {
    id: "3",
    name: "Beignet Sucré",
    description:
      "Beignet traditionnel saupoudré de sucre, léger et croustillant à l'extérieur, moelleux à l'intérieur.",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1556653024-9ea351b69dc7?w=800&q=80",
    category: "donuts",
    ingredients: ["Farine", "Sucre", "Huile", "Œufs", "Levure"],
    images: [
      "https://images.unsplash.com/photo-1556653024-9ea351b69dc7?w=800&q=80",
      "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=800&q=80",
    ],
  },
  {
    id: "4",
    name: "Tarte aux Fruits",
    description:
      "Tarte garnie de fruits frais de saison sur une crème pâtissière légère et une pâte sablée croustillante.",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    category: "tarts",
    ingredients: ["Farine", "Beurre", "Sucre", "Œufs", "Fruits frais", "Crème"],
    images: [
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    ],
  },
  {
    id: "5",
    name: "Cupcake Vanille",
    description:
      "Cupcake à la vanille avec glaçage à la crème au beurre et décorations colorées.",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
    category: "cupcakes",
    ingredients: [
      "Farine",
      "Sucre",
      "Beurre",
      "Œufs",
      "Extrait de vanille",
      "Levure",
    ],
    images: [
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    ],
  },
  {
    id: "6",
    name: "Gâteau au Chocolat",
    description:
      "Gâteau au chocolat riche et moelleux avec glaçage au chocolat noir et copeaux de chocolat.",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "cakes",
    ingredients: [
      "Farine",
      "Sucre",
      "Beurre",
      "Œufs",
      "Chocolat noir",
      "Levure",
    ],
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
    ],
  },
  {
    id: "7",
    name: "Beignet Chocolat",
    description:
      "Beignet fourré au chocolat fondant, une explosion de saveurs en bouche.",
    price: 700,
    image:
      "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=800&q=80",
    category: "donuts",
    ingredients: ["Farine", "Sucre", "Huile", "Œufs", "Chocolat", "Levure"],
    images: [
      "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=800&q=80",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    ],
  },
  {
    id: "8",
    name: "Tarte au Citron",
    description:
      "Tarte au citron meringuée, l'équilibre parfait entre l'acidité du citron et la douceur de la meringue.",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    category: "tarts",
    ingredients: ["Farine", "Beurre", "Sucre", "Œufs", "Citron", "Meringue"],
    images: [
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    ],
  },
];

export default ProductGallery;
