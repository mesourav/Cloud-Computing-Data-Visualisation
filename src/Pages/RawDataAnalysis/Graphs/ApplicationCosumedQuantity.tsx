import BarChartComponent from "../../../Components/Charts/BarChartComponent";
import { IRawData } from "../../../Models";

interface Iprops {
  rawData: Array<IRawData>;
}

function ApplicationCosumedQuantity(props: Iprops) {
  const { rawData } = props;

  return (
    <BarChartComponent
      rawData={rawData}
      title={"Top 10 Applications With Higest Consumed Quantity"}
      topic={"totalConsumedQuantity"}
      label={"Consumed Quantity"}
      dataKeyValue={"ResourceGroup"}
      backgroundColor={"#6b70b5"}
    />
  );
}

export default ApplicationCosumedQuantity;
