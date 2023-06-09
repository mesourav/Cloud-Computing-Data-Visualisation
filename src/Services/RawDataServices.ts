import request from "../Utils/AxiosConfig";

export const getRawDataService = async () => {
  try {
    const response = await request.get("/raw");
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    alert("Somethin went wrong");
    console.log(err);
  }
};
