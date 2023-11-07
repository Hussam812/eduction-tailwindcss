import {
  About,
  Contact,
  Courses,
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
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
