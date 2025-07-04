import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Heart,
  Star,
  Cake,
  Coffee,
  Gift,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ProductGallery from "./ProductGallery";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      text: "Les cupcakes de GOURMANDISE BY MARIE sont incroyables ! Livraison rapide et un goût inoubliable.",
      author: "Aissatou D.",
      rating: 5,
    },
    {
      text: "J'ai commandé un gâteau personnalisé pour l'anniversaire de ma fille : une vraie réussite.",
      author: "Fatou M.",
      rating: 5,
    },
    {
      text: "Des beignets dorés et croustillants comme nulle part ailleurs. Je recommande vivement !",
      author: "Moussa S.",
      rating: 5,
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      title: "Gâteau d'anniversaire",
      description: "Gâteau personnalisé avec décoration sur mesure",
    },
    {
      src: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=800&q=80",
      title: "Beignets croustillants",
      description: "Beignets dorés et moelleux, spécialité maison",
    },
    {
      src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
      title: "Tarte aux fruits",
      description: "Tartelette citron mangue aux fruits frais",
    },
    {
      src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
      title: "Cupcake au chocolat",
      description: "Cupcakes maison avec glaçage artisanal",
    },
    {
      src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
      title: "Cupcakes vanille",
      description: "Délicieux cupcakes à la vanille",
    },
    {
      src: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
      title: "Tarte au citron",
      description: "Tarte au citron meringuée",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-rose-800">
              GOURMANDISE BY MARIE
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#accueil"
              className="text-rose-900 hover:text-rose-600 font-medium transition-colors"
            >
              Accueil
            </a>
            <a
              href="#apropos"
              className="text-rose-900 hover:text-rose-600 font-medium transition-colors"
            >
              À propos
            </a>
            <a
              href="#creations"
              className="text-rose-900 hover:text-rose-600 font-medium transition-colors"
            >
              Créations
            </a>
            <a
              href="#services"
              className="text-rose-900 hover:text-rose-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-rose-900 hover:text-rose-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button
            onClick={() => window.open("https://wa.me/221774278279", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white hidden md:flex"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-wide">
            GOURMANDISE BY MARIE
          </h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-rose-200 mb-4 font-light">
            Pâtisseries Artisanales – Dakar, Sénégal
          </h3>
          <p className="text-xl md:text-2xl text-white/90 italic mb-12 font-light">
            Fait main. Fait avec amour.
          </p>

          <Button
            onClick={() => window.open("https://wa.me/221774278279", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Commander sur WhatsApp
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* À propos de Mariama */}
      <section
        id="apropos"
        className="py-20 bg-gradient-to-br from-rose-50 to-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Mariama en cuisine"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Texte */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">
                À propos de moi
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mb-8"></div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Chez GOURMANDISE BY MARIE, chaque douceur est une œuvre d'art.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Je suis une passionnée de pâtisserie artisanale, et je combine
                tradition sénégalaise et savoir-faire français pour créer des
                moments sucrés inoubliables.
              </p>

              <div className="flex items-center space-x-4 pt-6">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="text-lg font-medium text-rose-800">
                  Fait avec amour depuis 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie - Nos créations */}
      <section id="creations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-4">
              Nos Créations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos délicieuses pâtisseries faites avec amour et passion
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-amber-50 to-rose-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-4">
              Nos Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Gâteaux personnalisés */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-2">
                Gâteaux personnalisés
              </h3>
              <p className="text-sm text-gray-600">
                Sur mesure pour vos événements
              </p>
            </div>

            {/* Cupcakes maison */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-2">
                Cupcakes maison
              </h3>
              <p className="text-sm text-gray-600">Délicieux et colorés</p>
            </div>

            {/* Beignets */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-2">Beignets</h3>
              <p className="text-sm text-gray-600">Croustillants et dorés</p>
            </div>

            {/* Buffets événementiels */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-2">
                Buffets événementiels
              </h3>
              <p className="text-sm text-gray-600">
                Pour vos grandes occasions
              </p>
            </div>

            {/* Livraison à Dakar */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-2">
                Livraison à Dakar
              </h3>
              <p className="text-sm text-gray-600">Service rapide et fiable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-4">
              Témoignages Clients
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ),
                  )}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </blockquote>

                <cite className="text-lg font-semibold text-rose-800">
                  – {testimonials[currentTestimonial].author}
                </cite>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-rose-300 hover:bg-rose-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-rose-500"
                        : "bg-rose-200"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-rose-300 hover:bg-rose-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact / Commande */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-rose-600 to-pink-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Passer une commande ?
            </h2>

            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Contactez-moi directement sur WhatsApp pour vos commandes
              personnalisées.
            </p>

            <p className="text-lg mb-12 opacity-80">
              Téléphone : +221 77 427 82 79
            </p>

            <Button
              onClick={() =>
                window.open("https://wa.me/221774278279", "_blank")
              }
              className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Commander Maintenant
            </Button>

            <div className="flex justify-center space-x-8 mt-12">
              <div className="flex items-center text-white/80">
                <Phone className="h-5 w-5 mr-2" />
                <span>+221 77 427 82 79</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-900 to-pink-900 text-rose-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              GOURMANDISE BY MARIE
            </h3>
            <p className="text-lg mb-6 opacity-90">
              © 2025 GOURMANDISE BY MARIE
              <br />
              Fait avec amour à Dakar, Sénégal
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://wa.me/221774278279"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-rose-200 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-rose-200 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>

            <div className="border-t border-rose-800 pt-6">
              <p className="text-sm opacity-75">
                Pâtisseries artisanales • Fait main • Fait avec amour
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open("https://wa.me/221774278279", "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
