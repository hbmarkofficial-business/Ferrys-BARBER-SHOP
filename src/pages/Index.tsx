import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bergisch Gladbach | Almaz Hairstylist Barber Shop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Almaz Hairstylist Barber Shop in Bergisch Gladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bergisch Gladbach, Almaz Hairstylist"
        />
        <link rel="canonical" href="https://almaz-barber.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Almaz Hairstylist Barber Shop | Premium Barbershop Bergisch Gladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bergisch Gladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://almaz-barber.de" />
        <meta property="og:image" content="https://almaz-barber.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Almaz Hairstylist Barber Shop | Premium Barbershop Bergisch Gladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://almaz-barber.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Almaz Hairstylist Barber Shop",
            "image": "https://almaz-barber.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Schloßstraße 31",
              "addressLocality": "Bergisch Gladbach",
              "postalCode": "51429",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.9632",
              "longitude": "7.1517"
            },
            "url": "https://almaz-barber.de",
            "telephone": "+49 2204 9797112",
            "openingHours": "Mo-Fr 10:00-19:00, Sa 10:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/almazbarber",
              "https://www.instagram.com/almazbarber"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

