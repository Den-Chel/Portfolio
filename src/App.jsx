import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to My Portfolio</h2>
        {/* Add your other sections like About, Projects, etc. here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
