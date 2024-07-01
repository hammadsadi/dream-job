import axios from "axios";

// Get All Jobs
export const getAllJobs = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`
  );
  return data;
};
