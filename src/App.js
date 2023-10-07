import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <div className="flex h-screen !overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
