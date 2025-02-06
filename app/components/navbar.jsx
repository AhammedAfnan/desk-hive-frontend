import { Link } from '@remix-run/react' 

export default function Navbar() {
  return (
    <header className='bg-white shadow-sm'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-24'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className='block hover:opacity-80 transition-opacity duration-200'>
            <img src="logo.webp" alt="Logo" className='h-12 w-auto max-w-full' />
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-12 text-2xl font-teko'>
            <Link
            to='/workspaces'
            className='text-gray-700 hover:text-indigo-600 transition-colors duration-200'
            >
              Workspaces
            </Link>
            <Link
            to='/places'
            className='text-gray-700 hover:text-indigo-600 transition-colors duration-200'
            >
              Places
            </Link>
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
