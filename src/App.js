import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./pages/Home/Banner/Banner";
import Header from "./pages/Shared/Header/Header";

function App() {
  const data =
    "Pathology is a medical specialty about the study and causes of disease and is integral to the diagnosis of every cancer. <br/> Pathologists can also examine changes in tissue, blood and other bodily fluid samples to gain an understanding of the potential for disease development, the cause or severity of disease and/or to monitor the progress of disease, effectiveness of treatment and your general health.<br/>At Peter Mac, the Pathology team uses blood and other tissue samples to help diagnose the tumour type and can also help determine a likely prognosis and inform clinicians about the most appropriate management for a cancer.<br/>Peter Mac’s Pathology team operates a 24-hour on-site service which provides biochemistry, haematology, anatomical pathology and diagnostic molecular pathology. If you have had bloods or specimens collected during any sort of procedure, as an inpatient or in our outpatient pathology clinic at Peter Mac, they will go straight to our on-site pathologists for analysis.";
  console.log(data.split("<br/>"));
  return (
    <div className="">
      {/*       <>
        {data?.split("<br/>")?.map((p) => (
          <div>
            <p style={{ marginBottom: "10px" }}>{p}</p>
          </div>
        ))}
      </> */}

      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
