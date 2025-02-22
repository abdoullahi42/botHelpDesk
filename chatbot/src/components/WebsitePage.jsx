import  { useState } from 'react';
import {
  FiSend,
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiChevronRight,
  FiPackage,
  FiFileText,
  FiSettings,
  FiUsers,
  FiGlobe,
  FiMenu, 
  FiX, 
} from 'react-icons/fi';



const WebsitePage = () => {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        title: 'Digitize Your Business with GleamMax',
        subtitle: 'Custom Software Solutions for Commerce and Manufacturing',
        cta: 'Get a Free Consultation',
      },
      about: {
        title: 'About GleamMax',
        text: 'At GleamMax, we specialize in creating custom software solutions that streamline operations for businesses in commerce and manufacturing. From automating stock management to generating financial reports, we help you work smarter, not harder.',
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Stock Management Systems',
            desc: 'Transform your inventory management with our digital solutions',
          },
          {
            title: 'Automated Financial Reporting',
            desc: 'Get real-time insights into your financial performance',
          },
          {
            title: 'Manufacturing Process Optimization',
            desc: 'Streamline your production with smart automation',
          },
          {
            title: 'Digital Transformation Consulting',
            desc: 'Expert guidance for your digital journey',
          },
        ],
      },
      testimonials: {
        title: 'What Our Clients Say',
        items: [
          {
            text: 'GleamMax transformed our business! We used to manage everything on Excel, but now our stock and finances are automated. Highly recommend!',
            author: 'Jean Michel',
            role: 'Business Owner',
            company: 'Tech Solutions Ltd',
          },
          {
            text: 'The team at GleamMax is professional and efficient. They delivered exactly what we needed to streamline our manufacturing process.',
            author: 'Sarah Thompson',
            role: 'Factory Manager',
            company: 'Industrial Systems',
          },
        ],
      },
      contact: {
        title: 'Get in Touch',
        name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        send: 'Send Message',
      },
    },
    fr: {
      nav: {
        about: 'À Propos',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        title: 'Digitalisez Votre Entreprise avec GleamMax',
        subtitle: 'Solutions Logicielles Personnalisées pour le Commerce et la Fabrication',
        cta: 'Obtenir une Consultation Gratuite',
      },
      about: {
        title: 'À Propos de GleamMax',
        text: 'Chez GleamMax, nous sommes spécialisés dans la création de solutions logicielles personnalisées qui optimisent les opérations des entreprises dans le commerce et la fabrication. De la gestion automatisée des stocks à la génération de rapports financiers, nous vous aidons à travailler plus intelligemment.',
      },
      services: {
        title: 'Nos Services',
        items: [
          {
            title: 'Systèmes de Gestion des Stocks',
            desc: 'Transformez votre gestion des stocks avec nos solutions numériques',
          },
          {
            title: 'Rapports Financiers Automatisés',
            desc: 'Obtenez des aperçus en temps réel de vos performances financières',
          },
          {
            title: 'Optimisation des Processus de Fabrication',
            desc: 'Optimisez votre production avec l\'automatisation intelligente',
          },
          {
            title: 'Conseil en Transformation Digitale',
            desc: 'Accompagnement expert pour votre transition numérique',
          },
        ],
      },
      testimonials: {
        title: 'Ce que Disent Nos Clients',
        items: [
          {
            text: 'GleamMax a transformé notre entreprise ! Nous gérions tout sur Excel, mais maintenant nos stocks et nos finances sont automatisés. Je recommande vivement !',
            author: 'Jean Michel',
            role: "Propriétaire d'Entreprise",
            company: 'Tech Solutions Ltd',
          },
          {
            text: "L'équipe de GleamMax est professionnelle et efficace. Ils ont livré exactement ce dont nous avions besoin pour optimiser notre processus de fabrication.",
            author: 'Sarah Thompson',
            role: 'Responsable d\'Usine',
            company: 'Industrial Systems',
          },
        ],
      },
      contact: {
        title: 'Contactez-Nous',
        name: 'Nom',
        email: 'Email',
        phone: 'Numéro de Téléphone',
        message: 'Message',
        send: 'Envoyer le Message',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <div className="fixed top-16 lg:top-4 right-4 z-50">
        <button
          onClick={() => setLanguage((lang) => (lang === 'en' ? 'fr' : 'en'))}
          className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-gray-50"
        >
          <FiGlobe className="w-4 h-4 mr-2" />
          {language.toUpperCase()}
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between lg:w-11/12 pr-32">
      <div className="text-2xl font-bold">GleamMax</div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`absolute top-16 left-0 w-full bg-white text-blue-500 p-6 space-y-4 md:bg-transparent md:text-white shadow-md md:static md:w-auto md:flex md:space-x-6 md:space-y-0  md:p-0 md:items-center md:justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#about" className="block hover:text-blue-200">
          {t.nav.about}
        </a>
        <a href="#services" className="block hover:text-blue-200">
          {t.nav.services}
        </a>
        <a href="#contact" className="block hover:text-blue-200">
          {t.nav.contact}
        </a>
      </div>
    </nav>

        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl mb-8">{t.hero.subtitle}</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center">
              {t.hero.cta}
              <FiChevronRight className="ml-2" />
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="/api/placeholder/600/400"
              alt="Digital Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.about.title}</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 text-center">
            {t.about.text}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {[<FiPackage />, <FiFileText />, <FiSettings />, <FiUsers />][index]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start mb-6">
                  <img
                    src={`/api/placeholder/64/64`}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.contact.title}</h2>
          <div className="max-w-2xl mx-auto">
          <form
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    const mailtoLink = `mailto:abdoullahisalihou2@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
      phone
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  }}
  className="space-y-6"
>
  <div>
    <label className="block text-gray-700 mb-2">{t.contact.name}</label>
    <input
      type="text"
      name="name"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-gray-700 mb-2">{t.contact.email}</label>
    <input
      type="email"
      name="email"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-gray-700 mb-2">{t.contact.phone}</label>
    <input
      type="tel"
      name="phone"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-gray-700 mb-2">{t.contact.message}</label>
    <textarea
      name="message"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center"
  >
    {t.contact.send}
    <FiSend className="ml-2" size={20} />
  </button>
</form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">GleamMax</div>
              <p className="text-gray-400">
                {language === 'en'
                  ? 'Transforming businesses through digital solutions'
                  : 'Transformer les entreprises grâce aux solutions numériques'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.nav.contact}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FiPhone size={20} className="mr-2" />
                  <span>+237 6 98 63 03 82</span>
                </div>
                <div className="flex items-center">
                  <FiMail size={20} className="mr-2" />
                  <span>info@gleammax.com</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin size={20} className="mr-2" />
                  <span>Douala, Cameroon</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Follow Us' : 'Suivez-nous'}
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <FiLinkedin size={24} />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} GleamMax.{' '}
            {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsitePage;
