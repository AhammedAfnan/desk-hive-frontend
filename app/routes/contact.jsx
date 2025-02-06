import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Contact() {
  return ( 
    <>
      <Navbar />
    <div className='bg-gray-300 text-white min-h-screen flex flex-col items-center justify-center space-y-8 px-4'>
      <h1 className='text-4xl text-black font-bold text-center'>HOW CAN WE HELP?</h1>
      <form className='w-full max-w-3xl space-y-6'>
        <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
          <input 
          type="text"
          placeholder='Name'
          className='flex-1 p-4 bg-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
          <input 
          type="email"
          placeholder='Email'
          className='flex-1 p-4 bg-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <textarea 
        placeholder='Message'
        rows="5"
        className='w-full p-4 bg-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></textarea>

        <button
        type='submit'
        className='w-full bg-black py-3 rounded-md font-bold hover:bg-blue-500 transition '
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}
