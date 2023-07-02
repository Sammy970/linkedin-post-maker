import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

export const api = async (
  topic,
  certificationData,
  conferenceData,
  internData,
  othersData,
  setOutput,
  setLoadingState
) => {
  const api_url = "https://chimeragpt.adventblocks.cc/v1/chat/completions";
  const api_key = `${REACT_APP_API_KEY}`;

  // console.log(REACT_APP_API_KEY);

  setLoadingState(true);

  let body = ``;

  if (topic === "certification") {
    body = `
    Write me a LinkedIn Post on the Topic of ${topic} which is published by ${certificationData.pub}.
    The course title is ${certificationData.title} and its of duration ${certificationData.duration}.
    The skills I gained from the course are as follows: ${certificationData.skill}.
    Here are some extra details for your help: ${certificationData.extraDetails}.
    Make sure the post is of MAXIMUM 100 words and not more than that. Otherwise you will get a penalty.
    `;
  } else if (topic === "conference") {
    body = `
    Write me a nice, fun, professional, in markdown format LinkedIn Post on the Topic of ${topic}. The Conference that I attendted to was ${conferenceData.conferenceName}.
    The location of the conference was - ${conferenceData.location}.
    The date of the conference at which I presented was - ${conferenceData.date}.
    The title of our research was ${conferenceData.titleOfResearch}.
    My Team Members are as follows: ${conferenceData.teamMembers}.
    Here are some extra details for your help: ${conferenceData.extraDetails}
    Make sure the post is of MAXIMUM 100 words and emojis and not more than that. Otherwise you will get a penalty.
    `;
  } else if (topic === "others") {
    body = `
    Write me a nice, fun, professional, in markdown format LinkedIn Post with the following Details: ${othersData.details}
    Make sure the post is of MAXIMUM 100 words and emojis and not more than that. Otherwise you will get a penalty.
    `;
  } else if (topic === "internship") {
    body = `
    Write me a nice, fun, professional, in markdown format LinkedIn Post on the topic of ${topic}. 
    The Company Name in which I got the intership is ${internData.companyName}. 
    The Position that I got is ${internData.position}. 
    The duration of the internship is ${internData.duration}. 
    I got the internship from ${internData.platform}.     
    Here are some extra details for your help: ${internData.extraDetails}
    Make sure the post is of MAXIMUM 100 words and emojis and not more than that. Otherwise you will get a penalty.
    `;
  }

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
          content: body,
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
  setOutput(data);
};
