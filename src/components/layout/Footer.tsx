import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  products: [
    { name: "Hibiscus Drinks", href: "/shop" },
    { name: "Tigernut Milk", href: "/shop" },
    { name: "Blends", href: "/shop" },
    { name: "Gift Sets", href: "/shop" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "FAQs", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/rosella.ng" },
  { icon: Facebook, href: "https://facebook.com/rosella.ng" },
  { icon: Twitter, href: "https://twitter.com/rosella_ng" },
];

export const Footer = () => {
  return (
    <footer className="bg-rosella-dark text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-rosella py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2">
                Join the Rosella Community
              </h3>
              <p className="text-primary-foreground/70 font-body">
                Get exclusive offers, recipes, and wellness tips delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 font-body"
              />
              <Button variant="heroSolid" className="bg-rosella-red-light text-primary-foreground hover:bg-rosella-red">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-rosella py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-bold">Rosella</span>
            </Link>
            <p className="text-primary-foreground/70 font-body mb-6 max-w-sm">
              Premium hibiscus and tigernut beverages, crafted with love in Nigeria. 
              Experience luxury, naturally.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-rosella-red-light transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-rosella-red-light" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rosella-red-light" />
                <a href="tel:+2348012345678" className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rosella-red-light" />
                <a href="mailto:hello@rosella.ng" className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm">
                  hello@rosella.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-rosella py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">
            © 2024 Rosella. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground font-body text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground font-body text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
