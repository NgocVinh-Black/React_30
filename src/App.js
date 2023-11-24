import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
