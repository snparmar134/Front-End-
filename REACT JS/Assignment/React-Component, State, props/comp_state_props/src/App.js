import { useState } from "react";
import Card from "./Card";

function App() {

  const apiLink = "https://jsonplaceholder.typicode.com/posts";

  const [data, setDate] = useState(false);
  if (data == false) {
    fetch(apiLink).then(rawResponse => rawResponse.json()).then(json => {
      setDate(json)
      console.log(data);

    })
  }

  const loading = <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  return (
    <>
      {data == false && loading}

      {data && data.map((object) => {
        return <Card id={object.id} title={object.title} />
      })}
    </>
  );
}

export default App;
