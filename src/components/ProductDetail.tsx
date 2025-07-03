import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Heart, Share2 } from "lucide-react";

interface ProductDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  product?: {
    id: string;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    images: string[];
    category: string;
  };
}

const ProductDetail = ({
  isOpen = true,
  onClose = () => {},
  product,
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  // Default product data if none is provided
  const defaultProduct = {
    id: "1",
    name: "Cupcake au Chocolat",
    description:
      "Délicieux cupcake au chocolat avec glaçage à la vanille et pépites de chocolat. Parfait pour toutes les occasions.",
    price: 1500,
    ingredients: ["Farine", "Sucre", "Beurre", "Œufs", "Chocolat", "Vanille"],
    images: [
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800&q=80",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80",
    ],
    category: "Cupcakes",
  };

  const displayProduct = product || defaultProduct;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToOrder = () => {
    // This would typically add the product to a cart or order
    console.log(`Added ${quantity} ${displayProduct.name} to order`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {displayProduct.name}
          </DialogTitle>
          <DialogDescription>
            <Badge variant="secondary" className="mb-2">
              {displayProduct.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {displayProduct.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${displayProduct.name} - Image ${index + 1}`}
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>

            <div className="absolute top-2 right-2 flex space-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Description</h3>
              <p className="text-gray-600">{displayProduct.description}</p>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-medium">Ingrédients</h3>
              <ul className="list-disc list-inside text-gray-600">
                {displayProduct.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-medium">Prix</h3>
              <p className="text-2xl font-bold text-primary">
                {displayProduct.price} FCFA
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium">Quantité:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decrementQuantity}
                    className="h-8 px-2"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={incrementQuantity}
                    className="h-8 px-2"
                  >
                    +
                  </Button>
                </div>
              </div>

              <Button className="w-full" onClick={handleAddToOrder}>
                <PlusCircle className="mr-2 h-4 w-4" /> Ajouter à la commande
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
