import Tilt from "react-parallax-tilt";
import "./App.css";

function App() {
  return (
    <div className="App bg-image">
      <Tilt className="h-screen flex items-center justify-center">
        <div className="container md:h-96 md:w-96 w-72 h-72 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className="h-full flex flex-col justify-evenly items-center">
            <div className="text-white font-semibold text-2xl tracking-widest">
              Login form
            </div>
            <input
              type="text"
              placeholder="username"
              className="bg-transparent text-xl border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide"
            />
            <input
              type="password"
              placeholder="password"
              className="bg-transparent  text-xl border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide"
            />
            <input
              type="Submit"
              className="cursor-pointer  rounded-full px-5 py-1 bg-white bg-opacity-30 hover:bg-white hover:bg-opacity-80 "
            />
          </form>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
