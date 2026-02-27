import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/image.png" 
                  alt="WESLUX Logo" 
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">WESLUX</h3>
                <p className="text-sm text-gray-400">Mentorship for Education</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Registered Office: 18 rue de Nicolas Meyers, Bascharage, Luxembourg 4918
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <p className="text-gray-400 mb-2">Email: weslux4edu@gmail.com</p>
            <p className="text-gray-400">Mentorship App: mentorship.weslux.lu</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Mentorship App</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support Our Work</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Partner With Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
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