export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6 mt-10 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
  
          {/* >>>Company Info<<< */}
          <div>
            <h3 className="font-bold text-lg mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
               
            </ul>
          </div>
  
          {/* >>>Useful Links<<< */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/cart" className="hover:underline">Cart</a></li> 
            </ul>
          </div>
  
          {/* >>>Help & Support<<< */}
          <div>
            <h3 className="font-bold text-lg mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="hover:underline">FAQs</li>
              <li className="hover:underline">Terms & Conditions</li>
              <li className="hover:underline">Privacy Policy </li>
            </ul>
          </div>
  
          {/* >>>Social Media<<< */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://x.com/m_vishusharma" target="_blank"  className="hover:underline">Twitter</a>
              <a href="https://instagram.com/parvas_sharma" target="_blank"  className="hover:underline">Instagram</a>
              <a href="https://github.com/parvas662" target="_blank"  className="hover:underline">GitHub</a>
            </div>
          </div>
  
        </div>
  
        {/* >>>Copyright<<< */}
        <div className="text-center text-sm mt-6 text-gray-400">
          © 2025 FoodDelivery. All rights reserved.
        </div>
      </footer>
    );
  }
  