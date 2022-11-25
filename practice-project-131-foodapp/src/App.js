import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./components/store/cartcontext";

function App() {

  return (
    <CartContextProvider>
      <header>
        <AppHeader />
      </header>
      <main>
      <br /><br /><br /><br/>
      <section>
        <InfoCard>
          <h3>Delicious Food, Delivered To You</h3>
          <p>Choose your favorite meal from our broad collection and enjoy a delicious lunch otr dinner at home.</p>
          <p>All our meals are cooked with high quality ingredients. Just in time and of course by experirnvced chefs!</p>

        </InfoCard>
      </section>
      <br />
      <section>
        <Meals />
      </section>
      </main>
    </CartContextProvider>
  );
}

export default App;
