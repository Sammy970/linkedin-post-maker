import axios from "axios";

export const api = async (
  topic,
  pub,
  title,
  duration,
  skill,
  extraDetails,
  setOutput,
  setLoadingState
) => {
  const api_url = "https://chimeragpt.adventblocks.cc/v1/chat/completions";
  const api_key = "";

  setLoadingState(true);

  const response = await axios.post(
    `${api_url}`,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a LinkedIn Post Maker. Our users will give you info about what they want and you will respond to that accordingly. Make sure your response is in line with a LinkedIn Post because your response will be used in LinkedIn Post. You will not answer anything else. Make sure to respond everything in Markdown code which is compatible with React Markdown as I am using React Markdown to display your messages.",
        },
        {
          role: "user",
          content: `
          Write me a LinkedIn Post on the Topic of ${topic} which is published by ${pub}.
          The course title is ${title} and its of duration ${duration}.
          The skills I gained from the course are as follows: ${skill}.
          Here are some extra details for your help: ${extraDetails}.
          Make sure the post is of MAXIMUM 100 words and not more than that. Otherwise you will get a penalty.
          `,
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
  setLoadingState(false);
  console.log(data);
  setOutput(data);
};
