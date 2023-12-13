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
        "https://demin-backend.wit.id/auth/master_data/water_type/create",
        // "https://df4a-182-253-159-41.ngrok-free.app/so/login",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer c2ebc295-085f-4062-89f0-fe54f83c83c7",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="jenis_air"
          id="jenis_air"
          onChange={onChange}
        />
        <input type="text" name="password" id="password" onChange={onChange} />
        <button onClick={onClickGuys}>Submit</button>
      </form>
    </>
  );
}

export default App;
