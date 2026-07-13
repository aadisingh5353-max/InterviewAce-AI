import axios from "axios";

const API = axios.create({
  baseURL: "...",
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