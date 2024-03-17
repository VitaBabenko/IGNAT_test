import {
  Header,
  Hero,
  About,
  Goods,
  Stocks,
  Reviews,
  Contacts,
  Footer,
} from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Goods />
        <Stocks />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};
