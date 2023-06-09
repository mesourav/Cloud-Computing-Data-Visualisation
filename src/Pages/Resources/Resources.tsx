import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { getAllResources, getResourceData } from "../../Services/ResourcesServices";
import DataTableComponent from "../../Components/DataTable/DataTable";
import Loader from "../../Components/Loader/Loader";

function Resources() {
  const [resourcesData, setResourcesData] = useState([]);
  const [particularResourceData, setParticularResourceData] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getResources();
  }, []);

  const getResources = async () => {
    setLoader(true);
    const applicationData = await getAllResources();
    if (applicationData) {
      setResourcesData(applicationData);
      setLoader(false);
    }
  };

  const handleClick = async (name: string) => {
    setLoader(true);
    setSelectedResource(name);
    let resourceData = await getResourceData(name);
    if (resourceData) {
      setParticularResourceData(resourceData);
      setLoader(false);
    }
  };

  return (
    <div>
      <Loader open={loader} />
      {!loader && (
        <>
          <h1 className="heading">All Resources</h1>
          <div className="allApplications">
            {resourcesData.length &&
              resourcesData.map((data, index) => {
                return <Chip label={data} onClick={() => handleClick(data)} key={index} />;
              })}

            <p>*Click to find details of a resouces</p>
          </div>
          {particularResourceData.length && (
            <DataTableComponent data={particularResourceData} title={selectedResource} />
          )}
        </>
      )}
    </div>
  );
}

export default Resources;
