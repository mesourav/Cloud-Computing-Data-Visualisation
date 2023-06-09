import request from "../Utils/AxiosConfig";

export const getAllResources = async () => {
  try {
    const response = await request.get("/resources");
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    alert("Somethin went wrong");
    console.log(err);
  }
};

export const getResourceData = async (resourceName: string) => {
  try {
    const response = await request.get(`/resources/${resourceName}`);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    alert("Somethin went wrong");
    console.log(err);
  }
};
