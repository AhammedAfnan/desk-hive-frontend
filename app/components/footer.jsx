export default function Footer() {
    return (
      <footer className="bg-black text-white w-full pt-12 pb-12">
          <div className="h-48 flex flex-col items-center justify-center space-y-4">
              <p className="text-center text-md">Sign up for updates on our upcoming products</p>
              <h1 className="text-center text-3xl font-bold">FLOW - A STIM-FREE WORKOUT</h1>
              <div className="flex">
              <input type="text" placeholder="E-mail" className="w-80 p-2 rounded-md text-black bg-black border border-gray-100" />
              <button className="bg-white text-black ml-4 rounded-md px-12 py-4">Subscribe</button>
              </div>
          </div>
      </footer>
    )
  }
  