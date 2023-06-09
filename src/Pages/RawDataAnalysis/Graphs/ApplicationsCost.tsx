import BarChartComponent from "../../../Components/Charts/BarChartComponent";
import { IRawData } from "../../../Models";

interface Iprops {
  rawData: Array<IRawData>;
}

function ApplicationsCost(props: Iprops) {
  const { rawData } = props;

  return (
    <BarChartComponent
      rawData={rawData}
      title={"Top 10 Applications With Higest Cost"}
      topic={"totalCost"}
      label={"Total Cost"}
      dataKeyValue={"ResourceGroup"}
      backgroundColor={"#b57883"}
    />
  );
}

export default ApplicationsCost;
