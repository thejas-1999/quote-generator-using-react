import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("Be the chief but never the lord.");
  const handleQuotes = async () => {
    try {
      const res = await axios.get("https://type.fit/api/quotes");
      if (res.data && res.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomQuote = res.data[randomIndex].text;
        setQuote(randomQuote);
      } else {
        setQuote("No Quotes Available");
      }
    } catch (error) {
      console.error("Errors fetching quotes;", error);
      setQuote("Failed to fetch Quotes");
    }
  };
  return (
    <div className="App">
      <div className="card">
        <h3 className="heading">{quote}</h3>

        <button className="button" onClick={handleQuotes}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
