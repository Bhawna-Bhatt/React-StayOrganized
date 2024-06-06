import { useState, useEffect } from "react";

const baseUrl = "http://localhost:8083/";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        console.log(baseUrl + url);
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          console.log("ok");
          const json = response.json();
          setData(json);
          console.log(json);
          console.log(data);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      }
    }
    getData();
  }, [url]);
  return [data, error];
}
