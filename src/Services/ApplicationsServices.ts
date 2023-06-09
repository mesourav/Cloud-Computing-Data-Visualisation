import request from "../Utils/AxiosConfig";

export const getAllApplications = async () => {
  try {
    const response = await request.get("/applications");
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    alert("Somethin went wrong");
    console.log(err);
  }
};

export const getApplicationData = async (applicationName: string) => {
  try {
    const response = await request.get(`/applications/${applicationName}`);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    alert("Somethin went wrong");
    console.log(err);
  }
};
