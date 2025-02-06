import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";

export const meta = () => {
  return [
    { title: "Remix" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      
    </main>
    <Footer />
  </div>
  );
}
