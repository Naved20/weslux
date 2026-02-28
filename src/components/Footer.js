import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
            
              <div>
                <h3 className="text-xl font-bold">WES</h3>
                <p className="text-sm text-gray-400">Luxembourg for Education</p>
              </div>
            </div>

          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
                        <p className="text-gray-400 text-sm mt-4">
              Registered Office: 18 rue de Nicolas Meyers,<br /> Bascharage, Luxembourg 4918
            </p>
            <p className="text-gray-400 mb-2">Email: info@weslux.lu</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors">Support Us</Link>
              <a href="#partners" className="block text-gray-400 hover:text-white transition-colors">Partner With Us</a>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 WESLUX - WES Luxembourg for Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}