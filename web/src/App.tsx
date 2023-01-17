import { Habits } from "./components/Habits";

function App() {
  return (
    <div className="bg-zinc-700 text-white flex flex-col justify-center items-center h-screen">
      <Habits completed={3} />
      <Habits completed={10} />
      <Habits completed={20} />
      <Habits completed={30} />
    </div>
  );
}

export default App;
