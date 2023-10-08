import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col !ml-[106px] overflow-auto">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
