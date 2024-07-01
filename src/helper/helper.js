import axios from "axios";
import toast from "react-hot-toast";

export const toastAlert = (msg, type) => {
  return toast[type](msg);
};

// Upload Image to Cloudinary
export const uploadImageToCloudinary = async (photo) => {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

  // API Call

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dq1ey5jg1/image/upload",
      formData
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const timeAgo = (dateString) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get the difference in milliseconds between the post date and now
  const now = new Date();
  const differenceInMilliseconds = now.getTime() - date.getTime();

  // Convert milliseconds to seconds
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

  // Define an array of units and their corresponding seconds values
  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  // Find the appropriate unit based on the time difference
  for (let [unit, seconds] of units) {
    const interval = Math.floor(differenceInSeconds / seconds);
    if (interval >= 1) {
      const suffix = interval === 1 ? "" : "s";
      return `${interval} ${unit}${suffix} ago`;
    }
  }

  // If less than a minute, return "just now"
  return "just now";
};
