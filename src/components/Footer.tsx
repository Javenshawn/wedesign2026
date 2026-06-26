import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { NewsletterForm } from "@/components/NewsletterForm";

const footerGroups = [
  {
    title: "Services",
    links: ["Logo Design", "Brand Identity", "Design Consultation", "Rush Orders"]
  },
  {
    title: "Company",
    links: ["About Us", "Design Hall", "Blog", "Careers"]
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"]
  }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo />
          <p>
            Professional logo design services that help businesses build memorable brand identities.
            Get stunning designs from expert designers in 24-72 hours.
          </p>
          <div className="contact-list">
            <span>
              <Mail size={15} /> hello@wedesign.design
            </span>
            <span>
              <Phone size={15} /> +1 (555) 123-4567
            </span>
            <span>
              <MapPin size={15} /> New York, United States
            </span>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <Link href="#" key={link}>
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="container">
        <NewsletterForm />
      </div>

      <div className="container footer-bottom">
        <p>© 2024 WeDesign. All rights reserved. Designed with care for amazing brands.</p>
        <div className="socials" aria-label="Social links">
          <Link href="#" aria-label="Facebook">
            <Facebook size={16} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={16} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin size={16} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
