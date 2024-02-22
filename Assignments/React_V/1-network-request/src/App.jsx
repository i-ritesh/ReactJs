import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true)
      let req = await fetch("https://jsonplaceholder.typicode.com/posts");
      let finalReq = await req.json();

      setData(finalReq);
      setLoading(true);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <DataDisplay data={data} />
      )}
    </>
  );
}

export default App;
