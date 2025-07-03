import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DeliveryMapProps {
  deliveryZones?: string[];
}

const DeliveryMap = ({
  deliveryZones = [
    "Dakar Centre",
    "Almadies",
    "Plateau",
    "Mermoz",
    "Ouakam",
    "Ngor",
  ],
}: DeliveryMapProps) => {
  const [address, setAddress] = useState("");
  const [searchResult, setSearchResult] = useState<{
    isInRange: boolean;
    message: string;
  } | null>(null);

  const handleAddressCheck = () => {
    // This is a mock implementation - in a real app, you would use geocoding and check against actual delivery zones
    const isInRange = deliveryZones.some((zone) =>
      address.toLowerCase().includes(zone.toLowerCase()),
    );

    setSearchResult({
      isInRange,
      message: isInRange
        ? "Votre adresse est dans notre zone de livraison!"
        : "Désolé, nous ne livrons pas encore dans cette zone.",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-xl">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center">
            Zones de Livraison
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Vérifiez si votre adresse est dans notre zone de livraison à Dakar
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {deliveryZones.map((zone) => (
                <Badge key={zone} variant="secondary" className="text-sm py-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {zone}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Entrez votre adresse..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddressCheck} disabled={!address.trim()}>
                <Search className="h-4 w-4 mr-2" />
                Vérifier
              </Button>
            </div>

            {searchResult && (
              <div
                className={`p-4 rounded-md flex items-center ${searchResult.isInRange ? "bg-green-50" : "bg-red-50"}`}
              >
                {searchResult.isInRange ? (
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mr-2" />
                )}
                <p
                  className={
                    searchResult.isInRange ? "text-green-700" : "text-red-700"
                  }
                >
                  {searchResult.message}
                </p>
              </div>
            )}
          </div>

          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
            {/* In a real implementation, you would integrate with a map provider like Google Maps */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">
                  Carte des zones de livraison à Dakar
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Une carte interactive serait affichée ici
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryMap;
