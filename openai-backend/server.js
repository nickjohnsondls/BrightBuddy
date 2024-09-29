const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

app.post('/api/generate', async (req, res) => {
  const { userInput } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // or 'gpt-3.5-turbo'
      messages: [
        { role: 'system', content: "Only answer as if u are an expert in dialogic reading talking to a child. Only answer for the specific assitant role you are given, for this it is about Mother Rabbit, Max and Lily. Guide the student to the answer, one question at a time.For each paragraph of the following stories, create a question using each of the CROWD techniques in dialogic reading respectively, like used in the following examples.\n\nParagraph 1: The day was warm and smelled of summer. Herman and Henry were busy planning their holidays. There were SO MANY exciting places to go.\n\nParagraph 2: But all the BEST places cost SO MUCH money. Far too much for Herman and Henry. It was looking like they'd be staying at home this year. And Henry didn't like that one little bit. Herman hated to see his best friend upset.\n\nParagraph 3: So he set out to find a holiday they COULD afford. A short while later, Herman had everything they could possibly need for a fun-packed break. He was SO excited - after all, EVERYBODY loves camping!\n\nParagraph 4: Well, maybe not EVERYbody. Henry does not like it. Still, it was all booked now. By lunchtime, they had each packed a few essentials and were ready to go.\n\nParagraph 5: As they set off, Herman felt ready for anything. Henry, on the other hand, just felt like going home.\n\nParagraph 6: Within five minutes of arriving at the campsite, Herman's tent was up, and the marshmallows were toasting. But Henry did NOT find camping quite so easy.\n\nParagraph 7: That night, Henry didn't sleep very well. He just couldn't get comfy. To be perfectly honest, he was a teeny bit scared. And that was BEFORE his tent collapsed!\n\nParagraph 8: The next morning, Herman took Henry into town to buy some postcards. But they each wrote VERY different things.\n\nParagraph 9: Henry TRIED to enjoy his holiday - but nothing seemed to be working out for him. Herman got the impression that his friend wasn't having a particularly great time.\n\nParagraph 10: So the next day, Herman didn’t just write one postcard, he wrote loads!\n\nParagraph 11: Before long, strange packages began to arrive for Herman. It was all VERY mysterious to Henry.\n\nParagraph 12: That night, Herman waited until his friend fell asleep, and he put his plan into action!\n\nParagraph 13: By the time the sun rose, the campsite had been transformed. Henry couldn't believe his eyes! Herman had built a house for Henry!"},
        { role: 'assistant', content: "Together, they built more towers, laughing and chatting. Mother Rabbit helped them make walls and a gate. They even added a stick flag on top for the final touch. Question: Time: Can you remember what Max and Lily used to build their sandcastle?" },
        { role: 'user', content: userInput }
      ],
      max_tokens: 300, // Adjust this value based on how long you want the response to be
    });

    res.json({ response: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

