import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./dataTable";
import { cleanData, getFingerprint } from "./utils";
import { Helmet } from "react-helmet";

function App() {
  const [ipData, setIpData] = useState(null);
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    if (showReport) {
      fetch("https://extreme-ip-lookup.com/json")
        .then(res => res.json())
        .then(ip => Promise.all([ip, getFingerprint()]))
        .then(([ip, finger]) => {
          let f = finger
            .map(({ key, value }) => ({ [key]: value }))
            .reduce((acc, curr) => ({
              ...acc,
              ...curr
            }));

          f = cleanData(f);
          ip = cleanData(ip);

          setIpData(ip);
          setShowReport(false);
        });
    }
  }, [showReport]);

  return (
    <div>
      <Helmet>
        <title>About me - Safventure</title>
      </Helmet>
      <header>
        <section>
         
        </section>
      </header>
      {ipData ? (
        <div>
          <h1>
              Gotcha!!! hehehe Buy me a coffee or else if or else.. hahhaha
          </h1>
          <a href="https://www.buymeacoffee.com/jsafe00" target="_blank">
            <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" >
              </img></a>
          <DataTable data={ipData} />
        </div>
      ) : (
          <section>
            <h2>Please wait...</h2>
          </section>
        )}
    </div>
  );
}

export default App;
