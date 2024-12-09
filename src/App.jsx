
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    text: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const handleChange = (e, key) => {
    setInput({ ...input, [key]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={input.text}
          onChange={(e) => handleChange(e, "text")}
        />
        <input
          type="email"
          placeholder="user@company.com"
          value={input.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <input
          type="message"
          placeholder="Message"
          value={input.message}
          onChange={(e) => handleChange(e, "message")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
