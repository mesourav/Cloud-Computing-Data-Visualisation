import BarChartComponent from "../../../Components/Charts/BarChartComponent";
import { IRawData } from "../../../Models";

interface Iprops {
  rawData: Array<IRawData>;
}

function ResourcesCost(props: Iprops) {
  const { rawData } = props;

  return (
    <BarChartComponent
      rawData={rawData}
      title={"Top 10 Resouces With Higest Cost"}
      topic={"totalCost"}
      label={"Total Cost"}
      dataKeyValue={"MeterCategory"}
      backgroundColor={"#b57883"}
    />
  );
}

export default ResourcesCost;
