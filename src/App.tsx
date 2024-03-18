import "./App.css";
import MainContent from "./pages/MainContent";

export default function App() {
  return (
    <>
      <div className="bg-background flex h-screen flex-col">
        <Logo />
        <MainContent />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="text-primary left-10 top-10 my-4 ml-5 text-2xl">
        Stackr.ai
      </div>
    </>
  );
}
