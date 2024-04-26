const express = require("express");
const app = express();
const cors = require("cors");
const OpenAI = require("openai");
const bodyParser = require("body-parser");

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/suggestions", async (req, res) => {
  const OPENAI_API_KEY = "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";
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  const aiModel = "gpt-3.5-turbo";
    const inpJson = req.query.inputs;
    if(inpJson && inpJson.length){
        const prompt = []
        prompt.push("you are expert in recomending music");
        prompt.push("Based on the following inputs, suggest me a good song to listen");
        prompt.push(inpJson);
        const messages = [{
            role:"system",
            content : prompt.join(' '),
        }];
        const completion = await openai.chat.completions.create({
            model : aiModel,
            messages,
            
        });
        const aiResponse = completion.choices[0].message.content;
        res.setHeader('Content-Type', 'application/json');
        
        res.json({aiResponse})
    }else{
        res.json({message: "sssss"})
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));