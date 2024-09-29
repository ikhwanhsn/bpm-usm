import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section className="w-full h-5 bg-yellowColor"></section>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
