import "./App.css";
import Survey from "./components/Survey/Survey";

export default function App() {
  return (
    <>
      <div className="vertical h-screen">
        <Logo />
        <Survey />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="text-primary left-10 top-10 mx-5 my-2 text-2xl">
        Stackr.ai
      </div>
    </>
  );
}
