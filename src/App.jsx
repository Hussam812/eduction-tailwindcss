import {
  About,
  Contact,
  Course,
  Footer,
  Home,
  Navbar,
  Teacher,
} from "./components/container";

function App() {
  return (
    <div className="font-Poppins bg-Solitude ">
      <Navbar />
      <Home />
      <About />
      <Course />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
