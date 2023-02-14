import { useEffect, useState } from "react";
import axios from "axios";

const App = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [getAPIs, setGetAPIs] = useState([]);
  const [refresh, setRefresh] = useState([]);

  const Add = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/41c19df8-809a-4dd7-9574-5ef85ddeead7",
        {
          name,
          age,
        }
      )
      .then((data) => setRefresh(data));
    // return console.log(name, age);
  };

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/41c19df8-809a-4dd7-9574-5ef85ddeead7")
      .then((res) => setGetAPIs(res.data));
  }, [refresh]);

  // console.log(getAPIs);
  return (
    <div>
      <h1>Hello</h1>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={Add} className="btn btn-primary">
          Add
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {getAPIs.map((API, index) => {
            return (
              <tr key={index}>
                <td>{API.name}</td>
                <td>{API.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
