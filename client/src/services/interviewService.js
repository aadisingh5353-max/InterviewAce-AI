import API from "./api";

export const generateInterview = async (
  company,
  role,
  difficulty,
  token
) => {
  const res = await API.post(
    "/interview/generate",
    {
      company,
      role,
      difficulty,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};