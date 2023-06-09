import { IRawData } from "../Models";

export const dataAnalysis = (rawData: Array<IRawData>, name: string) => {
  var result = rawData.reduce(function (r: any, a: any) {
    r[a[name]] = r[a[name]] || [];
    r[a[name]].push({
      cost: parseInt(a.Cost),
      consumedQuantity: parseInt(a.ConsumedQuantity),
    });
    return r;
  }, Object.create(null));

  let dataForAnalysis: any = [];

  Object.keys(result).forEach(function (key) {
    dataForAnalysis.push({
      [name]: key,
      totalCost: totalCountOfKeyValueFormArray(result[key], "cost"),
      totalConsumedQuantity: totalCountOfKeyValueFormArray(result[key], "consumedQuantity"),
    });
  });

  return dataForAnalysis;
};

export const totalCountOfKeyValueFormArray = (array: Array<IRawData>, keyName: keyof IRawData) => {
  let totalCount = 0;
  array.map((data) => {
    totalCount = totalCount + data[keyName];
    return 0;
  });
  return totalCount;
};

export const findLargestTen = (arr: Array<IRawData>, keyName: keyof IRawData) => {
  arr.sort((a, b) => (a.totalCost < b[keyName] ? 1 : a[keyName] > b[keyName] ? -1 : 0));
  return arr.slice(0, 10);
};
