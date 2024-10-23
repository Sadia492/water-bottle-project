import Bottles from "./components/Bottles";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 mx-auto">
      <Header></Header>
      <Bottles></Bottles>
    </div>
  );
}

export default App;
