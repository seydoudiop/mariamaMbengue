import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ProductGallery from "./ProductGallery";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-amber-800">
              Mariama Pâtisserie
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-amber-900 hover:text-amber-600 font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-amber-900 hover:text-amber-600 font-medium"
            >
              Nos Produits
            </Link>
            <Link
              to="/order"
              className="text-amber-900 hover:text-amber-600 font-medium"
            >
              Commander
            </Link>
            <Link
              to="/delivery"
              className="text-amber-900 hover:text-amber-600 font-medium"
            >
              Livraison
            </Link>
            <Link
              to="/contact"
              className="text-amber-900 hover:text-amber-600 font-medium"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Délices Sucrés
            <br />
            Faits Maison
          </h2>
          <p className="text-xl text-white/90 max-w-lg mb-8">
            Des pâtisseries artisanales préparées avec passion, soin et
            authenticité à Dakar, Sénégal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Découvrir nos produits
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Contacter sur WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-8">
            À propos
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Bienvenue chez Mariama Pâtisserie, où chaque douceur est préparée
              avec passion, soin, et authenticité. Spécialisée dans la vente de
              pâtisseries artisanales, Mariama vous régale avec des créations
              uniques et délicieuses.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                  </svg>
                </div>
                <h3 className="font-medium text-amber-800">
                  Cupcakes et muffins
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                    <path d="M2 21h20" />
                    <path d="M7 8v2" />
                    <path d="M12 8v2" />
                    <path d="M17 8v2" />
                    <path d="M7 4h.01" />
                    <path d="M12 4h.01" />
                    <path d="M17 4h.01" />
                  </svg>
                </div>
                <h3 className="font-medium text-amber-800">
                  Gâteaux personnalisés
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="font-medium text-amber-800">Beignets</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-amber-800">Tartes fruitées</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-2">
            Nos Créations
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Découvrez nos délicieuses pâtisseries faites avec amour
          </p>
          <ProductGallery />
          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Voir tous nos produits
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-amber-800 text-center mb-2">
                  Commandes personnalisées
                </h3>
                <p className="text-gray-600 text-center">
                  Des créations sur mesure selon vos goûts et préférences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m8 22 4-11 4 11" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-amber-800 text-center mb-2">
                  Ingrédients frais
                </h3>
                <p className="text-gray-600 text-center">
                  Uniquement des produits de qualité pour des saveurs
                  authentiques.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-amber-800 text-center mb-2">
                  Livraison possible
                </h3>
                <p className="text-gray-600 text-center">
                  Service de livraison disponible selon votre localisation à
                  Dakar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-amber-800 text-center mb-2">
                  Offres spéciales
                </h3>
                <p className="text-gray-600 text-center">
                  Pour vos événements: mariages, anniversaires, baptêmes et
                  plus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-12">
            Contactez-nous
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium text-amber-800 mb-4">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-600 mr-3" />
                    <p className="text-gray-700">77 427 82 79</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                    <p className="text-gray-700">Dakar, Sénégal</p>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-amber-600 mr-3" />
                    <p className="text-gray-700">@mariama_patisserie</p>
                  </div>
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-amber-600 mr-3" />
                    <p className="text-gray-700">Mariama Délices</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <MessageCircle className="mr-2 h-4 w-4" /> Contacter sur
                    WhatsApp
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium text-amber-800 mb-4">
                  Envoyez-nous un message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                Mariama Pâtisserie
              </h3>
              <p className="mb-4">
                Des délices sucrés faits maison avec passion et authenticité à
                Dakar, Sénégal.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-100 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-amber-100 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-amber-100 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:underline">
                    Nos Produits
                  </Link>
                </li>
                <li>
                  <Link to="/order" className="hover:underline">
                    Commander
                  </Link>
                </li>
                <li>
                  <Link to="/delivery" className="hover:underline">
                    Livraison
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Heures d'ouverture</h3>
              <ul className="space-y-2">
                <li>Lundi - Vendredi: 9h - 19h</li>
                <li>Samedi: 10h - 18h</li>
                <li>Dimanche: Sur rendez-vous</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Mariama Pâtisserie. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
