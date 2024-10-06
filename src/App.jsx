import BackThisProject from "./components/BackThisProject";
import Bamboo from "./components/Bamboo";
import Donate from "./components/Donate";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Overlay from "./components/Overlay";
import Statistics from "./components/Statistics";
import ThankYouPage from "./components/ThankYouPage";
import { useCrowfund } from "./contexts/CrowfundProvider";

function App() {
  const { isOpen, isThankYou } = useCrowfund();

  return (
    <div className="container">
      <Navigation />
      <Hero />
      <Bamboo />
      <Statistics />
      <Donate />

      {isOpen && <BackThisProject />}
      {isOpen && <Overlay />}

      {isThankYou && <ThankYouPage />}
      {isThankYou && <Overlay />}
    </div>
  );
}

export default App;
