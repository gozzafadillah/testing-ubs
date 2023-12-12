import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onClickGuys = async (e) => {
    e.preventDefault(); // Menghentikan peristiwa klik default

    try {
      const response = await axios.post(
        "http://demin-backend.wit.id/so/login",
        // "https://df4a-182-253-159-41.ngrok-free.app/so/login",
        form
      );
      alert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <input type="text" name="username" id="username" onChange={onChange} />
        <input type="text" name="password" id="password" onChange={onChange} />
        <button onClick={onClickGuys}>Submit</button>
      </form>
    </>
  );
}

export default App;
