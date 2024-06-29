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
