import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const evaluateInterview = async (
  questions,
  answers,
  token
) => {

  const res = await API.post(
    "/interview/evaluate",
    {
      questions,
      answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};