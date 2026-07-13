import axios from "axios";

const API = axios.create({
  baseURL: "...",
});

export const uploadResume = async (
  file,
  company,
  role,
  difficulty,
  token
) => {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("company", company);
  formData.append("role", role);
  formData.append("difficulty", difficulty);

  const res = await API.post(
    "/resume/upload",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};