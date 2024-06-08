import { useState, useEffect, useRef } from "react";

const baseUrl = "http://localhost:8083/";

export default function useFetch(url) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        console.log("baseurl", baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    init();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return [data, error, loading];
}

// export default function useFetch(url) {
//   const [data1, setData1] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       fetch("http://localhost:8083/api/users")
//         .then((response) => response.json())
//         .then((data) => {
//           setData1(data);
//         });
//     } catch (e) {
//       setError(e);
//     }
//   }, []);
//   setLoading(false);

//   return [data1, error, loading];
// }

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   console.log("in use fetch");
//   useEffect(() => {
//     async function getData() {
//       setLoading(true);
//       console.log("in get api");
//       try {
//         console.log(baseUrl + url);
//         const response = await fetch(baseUrl + url);
//         if (response.ok) {
//           console.log("ok");
//           const data = await response.json();
//           setData(data);
//           console.log("data in fetch", data);
//         } else {
//           throw response;
//         }
//       } catch (e) {
//         setError(e);
//       }
//       console.log(data, error, loading);
//       setLoading(false);
//     }
//     getData();
//   });

//   return [data, error, loading];
// }
