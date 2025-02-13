import { Link } from "@remix-run/react"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
    return (
      <footer className="bg-black text-white py-12">
          <div className="w-full mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              <div>
                <img src="/logo.webp" alt="DeskHive Logo" className="h-12 w-auto mb-4" />
                <p className="text-white text-lg">BVR Lake Front, Veeranapallya Main Road, Nagavara, Bangalore- 560045 Karnataka - India </p>
                <p className="text-white mt-2">(+91)-828282 3361</p>
                <div className="flex space-x-4 m-4">
                  <Link to="https://facebook.com" className="hover:text-blue-500 border rounded-full p-2">
                  <Facebook size={20} />
                  </Link>
                  <Link to="https://linkedin.com" className="hover:text-blue-400 border rounded-full p-2">
                <Linkedin size={20} />
              </Link>
              <Link to="https://instagram.com" className="hover:text-pink-500 border rounded-full p-2">
                <Instagram size={20} />
              </Link>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-white text-center text-lg">
                <li><Link to="#">Company</Link></li>
                  <li><Link to="#">Features</Link></li>
                  <li><Link to="#">Pricing</Link></li>
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-white text-center text-lg">
                <li><Link to="#">Resources</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Customer Stories</Link></li>
                  <li><Link to="#">Legal</Link></li>
                  <li><Link to="#">Payment</Link></li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-white text-center text-lg">
                <li><Link to="#">Career</Link></li>
                  <li><Link to="#">Jobs</Link></li>
                  <li><Link to="#">Hiring</Link></li>
                  <li><Link to="#">News</Link></li>
                  <li><Link to="#">Tips and Tricks</Link></li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-white text-center text-lg">
                <li><Link to="#">Help</Link></li>
                  <li><Link to="#">FAQ</Link></li>
                  <li><Link to="#">Help Center</Link></li>
                  <li><Link to="#">Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-x-gray-700 mt-8"></div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center text-gray-500 text-lg mt-4">
                <span>© 2024, Desklinq All Rights Reserved</span>
                <div className="flex space-x-4 text-lg">
                  <a href="#" className="hover:underline">Terms of Service</a>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
      </footer>
    )
  } 
  