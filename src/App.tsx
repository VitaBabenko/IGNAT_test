import { Header, About, Stocks, Reviews, Contacts, Footer } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Stocks />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};
