import {
  Header,
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
