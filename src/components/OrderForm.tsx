import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

// Form schema
const orderFormSchema = z.object({
  // Step 1: Product Selection
  products: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        quantity: z.number().min(1),
        price: z.number(),
      }),
    )
    .min(1, { message: "Veuillez sélectionner au moins un produit" }),

  // Step 2: Custom Requirements
  customRequirements: z.object({
    specialInstructions: z.string().optional(),
    allergyInfo: z.string().optional(),
    decorationPreferences: z.string().optional(),
  }),

  // Step 3: Delivery Options
  deliveryOption: z.enum(["pickup", "delivery"]),
  deliveryDate: z
    .string()
    .min(1, { message: "Veuillez sélectionner une date de livraison" }),
  deliveryTime: z
    .string()
    .min(1, { message: "Veuillez sélectionner une heure de livraison" }),

  // Step 4: Event Details
  eventDetails: z.object({
    eventType: z.string().optional(),
    numberOfGuests: z.string().optional(),
    specialOccasion: z.boolean().optional(),
  }),

  // Step 5: Delivery Address (if delivery selected)
  deliveryAddress: z
    .object({
      fullName: z.string().min(1, { message: "Le nom complet est requis" }),
      phoneNumber: z
        .string()
        .min(1, { message: "Le numéro de téléphone est requis" }),
      address: z.string().min(1, { message: "L'adresse est requise" }),
      city: z.string().min(1, { message: "La ville est requise" }),
      additionalInfo: z.string().optional(),
    })
    .optional(),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const OrderForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Sample products data
  const sampleProducts = [
    {
      id: "1",
      name: "Cupcake Vanille",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&q=80",
    },
    {
      id: "2",
      name: "Gâteau Chocolat",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80",
    },
    {
      id: "3",
      name: "Beignets (6 pièces)",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1556913396-7a3c459ef68e?w=300&q=80",
    },
    {
      id: "4",
      name: "Tarte aux Fruits",
      price: 8000,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=300&q=80",
    },
  ];

  // Initialize form with default values
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      products: [],
      customRequirements: {
        specialInstructions: "",
        allergyInfo: "",
        decorationPreferences: "",
      },
      deliveryOption: "pickup",
      deliveryDate: "",
      deliveryTime: "",
      eventDetails: {
        eventType: "",
        numberOfGuests: "",
        specialOccasion: false,
      },
      deliveryAddress: {
        fullName: "",
        phoneNumber: "",
        address: "",
        city: "",
        additionalInfo: "",
      },
    },
  });

  const { watch } = form;
  const deliveryOption = watch("deliveryOption");
  const selectedProducts = watch("products");

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send the data to your backend here
      console.log("Order submitted:", data);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setOrderComplete(true);
      setCurrentStep(6); // Move to confirmation step
    } catch (error) {
      console.error("Error submitting order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return (
      selectedProducts?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) || 0
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Progress Steps */}
      <div className="bg-amber-50 p-4">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {currentStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              <span className="text-xs mt-1 text-gray-600">
                {step === 1 && "Produits"}
                {step === 2 && "Personnalisation"}
                {step === 3 && "Livraison"}
                {step === 4 && "Événement"}
                {step === 5 && "Adresse"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6">
          {/* Step 1: Product Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-800">
                    Sélectionnez vos produits
                  </CardTitle>
                  <CardDescription>
                    Choisissez parmi notre sélection de délicieuses pâtisseries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sampleProducts.map((product) => (
                      <div
                        key={product.id}
                        className="border rounded-lg p-4 flex items-center space-x-4 hover:bg-amber-50 transition-colors"
                      >
                        <div className="w-20 h-20 rounded-md overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-gray-500">
                            {product.price.toLocaleString()} FCFA
                          </p>
                          <div className="mt-2 flex items-center">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => {
                                const currentProducts =
                                  form.getValues("products");
                                const existingProduct = currentProducts.find(
                                  (p) => p.id === product.id,
                                );

                                if (
                                  existingProduct &&
                                  existingProduct.quantity > 1
                                ) {
                                  form.setValue(
                                    "products",
                                    currentProducts.map((p) =>
                                      p.id === product.id
                                        ? { ...p, quantity: p.quantity - 1 }
                                        : p,
                                    ),
                                  );
                                } else if (existingProduct) {
                                  form.setValue(
                                    "products",
                                    currentProducts.filter(
                                      (p) => p.id !== product.id,
                                    ),
                                  );
                                }
                              }}
                            >
                              -
                            </Button>
                            <span className="mx-2 w-8 text-center">
                              {selectedProducts?.find(
                                (p) => p.id === product.id,
                              )?.quantity || 0}
                            </span>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => {
                                const currentProducts =
                                  form.getValues("products");
                                const existingProduct = currentProducts.find(
                                  (p) => p.id === product.id,
                                );

                                if (existingProduct) {
                                  form.setValue(
                                    "products",
                                    currentProducts.map((p) =>
                                      p.id === product.id
                                        ? { ...p, quantity: p.quantity + 1 }
                                        : p,
                                    ),
                                  );
                                } else {
                                  form.setValue("products", [
                                    ...currentProducts,
                                    {
                                      id: product.id,
                                      name: product.name,
                                      price: product.price,
                                      quantity: 1,
                                    },
                                  ]);
                                }
                              }}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.products && (
                    <p className="text-red-500 text-sm mt-2">
                      {form.formState.errors.products.message}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div>
                    <p className="font-medium">
                      Total: {calculateTotal().toLocaleString()} FCFA
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={selectedProducts?.length === 0}
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Continuer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Custom Requirements */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-800">
                    Personnalisez votre commande
                  </CardTitle>
                  <CardDescription>
                    Partagez vos préférences et exigences spéciales
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="customRequirements.specialInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instructions spéciales</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Je souhaite un gâteau en forme de cœur..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Partagez toute instruction spéciale pour votre
                          commande.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customRequirements.allergyInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Informations sur les allergies</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Allergie aux noix, intolérance au lactose..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Informez-nous de toute allergie ou restriction
                          alimentaire.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customRequirements.decorationPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Préférences de décoration</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Couleurs préférées, thème, message sur le gâteau..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Décrivez comment vous souhaitez que vos pâtisseries
                          soient décorées.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Retour
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Continuer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Delivery Options */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-800">
                    Options de livraison
                  </CardTitle>
                  <CardDescription>
                    Choisissez comment vous souhaitez recevoir votre commande
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="deliveryOption"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Mode de réception</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="pickup" id="pickup" />
                              <label
                                htmlFor="pickup"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Récupération en personne
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="delivery" id="delivery" />
                              <label
                                htmlFor="delivery"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Livraison à domicile (frais supplémentaires
                                selon la zone)
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="deliveryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Date de{" "}
                            {deliveryOption === "pickup"
                              ? "récupération"
                              : "livraison"}
                          </FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deliveryTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Heure de{" "}
                            {deliveryOption === "pickup"
                              ? "récupération"
                              : "livraison"}
                          </FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Retour
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Continuer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Event Details */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-800">
                    Détails de l'événement
                  </CardTitle>
                  <CardDescription>
                    Partagez des informations sur votre événement (optionnel)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="eventDetails.eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type d'événement</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un type d'événement" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="birthday">
                              Anniversaire
                            </SelectItem>
                            <SelectItem value="wedding">Mariage</SelectItem>
                            <SelectItem value="graduation">
                              Remise de diplôme
                            </SelectItem>
                            <SelectItem value="babyShower">
                              Baby Shower
                            </SelectItem>
                            <SelectItem value="corporate">
                              Événement d'entreprise
                            </SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDetails.numberOfGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre d'invités</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Ex: 20"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Cela nous aide à recommander la quantité appropriée.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDetails.specialOccasion"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Occasion spéciale</FormLabel>
                          <FormDescription>
                            Cochez cette case si c'est une occasion très
                            spéciale et nous ajouterons une petite touche
                            supplémentaire.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Retour
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Continuer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 5: Delivery Address (if delivery selected) */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-800">
                    {deliveryOption === "delivery"
                      ? "Adresse de livraison"
                      : "Informations de contact"}
                  </CardTitle>
                  <CardDescription>
                    {deliveryOption === "delivery"
                      ? "Veuillez fournir votre adresse de livraison"
                      : "Veuillez fournir vos informations de contact pour la récupération"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="deliveryAddress.fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Prénom et nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deliveryAddress.phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 77 123 45 67" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {deliveryOption === "delivery" && (
                    <>
                      <FormField
                        control={form.control}
                        name="deliveryAddress.address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adresse</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Rue, numéro, quartier"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="deliveryAddress.city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ville</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Dakar" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="deliveryAddress.additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Informations supplémentaires</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Points de repère, instructions pour le livreur..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Retour
                  </Button>
                  <Button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Traitement...
                      </>
                    ) : (
                      <>Finaliser la commande</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 6: Order Confirmation */}
          {currentStep === 6 && orderComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-amber-800 mb-2">
                Commande confirmée!
              </h2>
              <p className="text-gray-600 mb-6">
                Merci pour votre commande. Nous vous contacterons bientôt pour
                confirmer les détails.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 max-w-md mx-auto text-left">
                <h3 className="font-medium mb-2">
                  Récapitulatif de la commande:
                </h3>
                <ul className="space-y-2 mb-4">
                  {selectedProducts?.map((product) => (
                    <li key={product.id} className="flex justify-between">
                      <span>
                        {product.quantity}x {product.name}
                      </span>
                      <span>
                        {(product.price * product.quantity).toLocaleString()}{" "}
                        FCFA
                      </span>
                    </li>
                  ))}
                  <li className="border-t pt-2 font-medium flex justify-between">
                    <span>Total:</span>
                    <span>{calculateTotal().toLocaleString()} FCFA</span>
                  </li>
                </ul>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Mode de réception:</span>{" "}
                    {deliveryOption === "pickup"
                      ? "Récupération en personne"
                      : "Livraison à domicile"}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {form.getValues("deliveryDate")}
                  </p>
                  <p>
                    <span className="font-medium">Heure:</span>{" "}
                    {form.getValues("deliveryTime")}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="button"
                  onClick={() => {
                    form.reset();
                    setCurrentStep(1);
                    setOrderComplete(false);
                  }}
                  className="bg-amber-500 hover:bg-amber-600"
                >
                  Nouvelle commande
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
