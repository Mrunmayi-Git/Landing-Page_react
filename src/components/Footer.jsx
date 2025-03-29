import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const footerLinks = {
  COMPANY: [
    { name: 'About', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  GETHELP: [
    { name: 'Support Career', href: '#' },
    { name: '24h Service', href: '#' },
    { name: 'Quick Chat', href: '#' },
  ],
  SUPPORT: [
    { name: 'FAQ', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'Business', href: '#' },
  ],
  CONTACT: [
    { name: 'WhatsApp', href: '#' },
    { name: 'Support 24', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 -ml-1 rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">The Next Design</span>
            </div>
            <p className="text-sm text-gray-600">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition">
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold mb-3 uppercase">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mrunmayi.com</p>
          <p>Created by Mrunmayi Jadhav</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
