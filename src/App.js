import { Footer } from "./components/Footer";
import { Articles } from "./pages/Articles";
import { GuideToInvest } from "./pages/InvestGuide";
import { ItsAboutFamily } from "./pages/ItsAboutFamily";
import { LandingPage } from "./pages/LandingPage";
import { Services } from "./pages/Services";
import { TalkToAdviser } from "./pages/TalkToAdviser";
import { WhoWeServe } from "./pages/WhoWeServe";


function App() {
  return (
    <div className="bg-zinc-100">
      <LandingPage />
      <div className="flex flex-col">
        <Services />
        <ItsAboutFamily />
        <WhoWeServe />
        <GuideToInvest />
        <Articles />
        <TalkToAdviser />
        <Footer />
      </div>
    </div>
  );
}

export default App;
