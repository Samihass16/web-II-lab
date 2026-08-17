import Contact from "./Contact";
import pfp from "./pfp.jpg";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1>Contact Information</h1>
      </header>

      <Contact
        name="Sami Hassen"
        email="samih4376@gmail.com"
        phone="+251 912 345 678"
        profile_picture={pfp}
      />
    </div>
  );
}

export default App;