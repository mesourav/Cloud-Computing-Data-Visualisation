import BarChartComponent from "../../../Components/Charts/BarChartComponent";
import { IRawData } from "../../../Models";

interface Iprops {
  rawData: Array<IRawData>;
}

function ResoucesConsumedQuantity(props: Iprops) {
  const { rawData } = props;

  return (
    <BarChartComponent
      rawData={rawData}
      title={"Top 10 Resouces With Higest Consumed Quantity"}
      topic={"totalConsumedQuantity"}
      label={"Consumed Quantity"}
      dataKeyValue={"MeterCategory"}
      backgroundColor={"#6b70b5"}
    />
  );
}

export default ResoucesConsumedQuantity;
