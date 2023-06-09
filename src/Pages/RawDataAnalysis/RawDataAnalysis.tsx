import { useEffect, useState } from "react";
import { getRawDataService } from "../../Services/RawDataServices";

import ResourcesCost from "./Graphs/ResourcesCost";
import ResoucesConsumedQuantity from "./Graphs/ResoucesConsumedQuantity";

import "../../App.css";
import ApplicationsCost from "./Graphs/ApplicationsCost";
import ApplicationCosumedQuantity from "./Graphs/ApplicationCosumedQuantity";
import Loader from "../../Components/Loader/Loader";
import { IRawData } from "../../Models";

function RawDataAnalysis() {
  const [rawData, setRawData] = useState(Array<IRawData>);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getRequiredData();
  }, []);

  const getRequiredData = async () => {
    setLoader(true);
    const rawData = await getRawDataService();
    if (rawData) {
      setRawData(rawData);
      setLoader(false);
    }
  };

  return (
    <div>
      <Loader open={loader} />
      {!loader && (
        <>
          <h1 className="heading">Raw data anaylysis outcomes</h1>
          {rawData.length ? (
            <div className="rawDataGraphs">
              <ResourcesCost rawData={rawData} />
              <ResoucesConsumedQuantity rawData={rawData} />
              <ApplicationsCost rawData={rawData} />
              <ApplicationCosumedQuantity rawData={rawData} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default RawDataAnalysis;
