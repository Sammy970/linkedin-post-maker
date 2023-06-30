import axios from "axios";

export const api = async (
  topic,
  pub,
  title,
  duration,
  skill,
  extraDetails,
  setOutput
) => {
  const api_url = "https://chimeragpt.adventblocks.cc/v1/chat/completions";
  const api_key = "";

  const response = await axios.post(
    `${api_url}`,
    {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
            "Write me simple Technology linkedin post about certificate courses in under 200 words thats it, not more than that and don't give me explanation and give me in React Markdown Format!",
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  );

  const data = await response.data.choices[0].message.content;
  console.log(data);
  setOutput(data);
};
