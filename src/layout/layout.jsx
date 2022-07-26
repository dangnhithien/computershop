import MenuVertical from "../components/menu-vertical/menuVertical";
import Footer from "./components/footer";
import Header from "./components/header";

const LayoutClient = ({ children }) => {
  return (
    <>
      <MenuVertical />
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutClient;
