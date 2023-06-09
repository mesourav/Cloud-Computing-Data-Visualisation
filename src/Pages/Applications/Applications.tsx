import { useEffect, useState } from "react";

import { getAllApplications, getApplicationData } from "../../Services/ApplicationsServices";
import { Chip } from "@mui/material";
import DataTableComponent from "../../Components/DataTable/DataTable";
import Loader from "../../Components/Loader/Loader";

function Applications() {
  const [applicationData, setApplicationData] = useState([]);
  const [particularApplicationData, setParticularApplicationData] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getApplications();
  }, []);

  const getApplications = async () => {
    setLoader(true);
    const applicationData = await getAllApplications();
    if (applicationData) {
      setApplicationData(applicationData);
      setLoader(false);
    }
  };

  const handleClick = async (name: string) => {
    setLoader(true);
    setSelectedApplication(name);
    let resourceData = await getApplicationData(name);
    if (resourceData) {
      setLoader(false);
      setParticularApplicationData(resourceData);
    }
  };

  return (
    <div>
      <Loader open={loader} />
      {!loader && (
        <>
          <h1 className="heading">All Applications</h1>
          <div className="allApplications">
            {applicationData.length &&
              applicationData.map((data, index) => {
                return <Chip label={data} onClick={() => handleClick(data)} key={index} />;
              })}
            <p>*Click to find details of an application</p>
          </div>

          {particularApplicationData.length && (
            <DataTableComponent data={particularApplicationData} title={selectedApplication} />
          )}
        </>
      )}
    </div>
  );
}

export default Applications;
