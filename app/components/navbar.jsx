import { useState } from 'react'
import { Link } from '@remix-run/react'
import { ChevronDown, ChevronUp } from 'lucide-react' 

export default function Navbar() {
  const [ isWorkspaceOpen, setIsWorkspaceOpen ] = useState(false)
  const [ isPlacesOpen, setIsPlacesOpen ] = useState(false)
  return (
    <header className='bg-white shadow-sm'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-24'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className='block hover:opacity-80 transition-opacity duration-200'>
            <img src="logo.webp" alt="Logo" className='h-12 w-auto max-w-full' />
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-12 text-2xl relative'>
            <div className="relative">
              <button
              onMouseEnter={()=> setIsWorkspaceOpen(true)}
              onMouseLeave={()=> setIsWorkspaceOpen(false)}
              className='flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                Workspaces
                { isWorkspaceOpen ? (
                  <ChevronUp className='ml-1 w-5 h-5' />
                ) : (
                  <ChevronDown className='ml-1 w-5 h-5' />
                )}
              </button>
              { isWorkspaceOpen && (
                <div onMouseEnter={()=> setIsWorkspaceOpen(true)} onMouseLeave={()=>setIsWorkspaceOpen(false)}
                className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10'>
                  <Link to="/hot-desk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hot Desk</Link>
                  <Link to="/meeting-rooms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Meeting Rooms</Link>
                  <Link to="/private-office" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Privte Office</Link>
                  <span className="block px-4 py-2 text-gray-400">Virtual Office (coming soon)</span>
                  <span className="block px-4 py-2 text-gray-400">Podcast (coming soon)</span>
                  <span className="block px-4 py-2 text-gray-400">Studio (coming soon)</span>
                </div>
              )}
            </div>
            <div className="relative">
              <button
              onMouseEnter={() => setIsPlacesOpen(true)}
              onMouseLeave={() => setIsPlacesOpen(false)}
              className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                Places
                {isPlacesOpen ? (
                  <ChevronUp className="ml-1 w-5 h-5" />
                ) : (
                  <ChevronDown className="ml-1 w-5 h-5" />
                )}
              </button>
              {isPlacesOpen && (
                <div onMouseEnter={() => setIsPlacesOpen(true)} onMouseLeave={() => setIsPlacesOpen(false)}
                className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10'>
                  <Link to="/new-delhi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New Delhi</Link>
                  <Link to="/mumbai" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mumbai</Link>
                  <Link to="/hyderabad" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hyderabad</Link>
                  <Link to="/bangalore" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New Delhi</Link>
                  <Link to="/chennai" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bangalore</Link>
                  <Link to="/pune" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pune</Link>
                  <Link to="/kolkata" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Kolkata</Link>
                  <Link to="/gurgaon" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gurgaon</Link>
                  <Link to="/ahmedabad" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ahmedabad</Link>
                </div>
              )}
            </div>
            <Link
            to='/about'
            className='text-gray-700 hover:text-indigo-600 transition-colors duration-200'
            >
              About Us
            </Link>
            <Link
            to='/contact'
            className='text-gray-700 hover:text-indigo-600 transition-colors duration-200'
            >
              Contact Us
            </Link>
            <Link
            to='/places'
            className='text-gray-700 hover:text-indigo-600 transition-colors duration-200'
            >
              Places
            </Link>
            <Link
            to='/login'
            className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-black rounded-md text-black transition-colors duration-200'
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
