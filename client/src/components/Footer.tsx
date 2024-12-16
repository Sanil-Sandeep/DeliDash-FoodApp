const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-100">DeliDash</h2>
              <p className="mt-2 text-sm">
                Your favorite food delivery service, delivering happiness since 2024.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-gray-100">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/about" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-400">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-gray-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h2 className="text-lg font-semibold text-gray-100">Follow Us</h2>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
            <p>&copy; 2024 DeliDash. All rights reserved.</p>
            <p>
              <a href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms" className="hover:text-gray-400">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  