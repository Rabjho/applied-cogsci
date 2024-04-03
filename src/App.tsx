import "./App.css";
import Survey from "./pages/Survey";

export default function App() {
  return (
    <>
      <div className="bg-background flex h-screen flex-col">
        <Logo />
        <Survey />
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
