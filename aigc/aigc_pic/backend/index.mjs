import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({
    path:'.env'
})

const client = new OpenAI({
    apiKey: 'sk-X0elCqFwBaSuKkLwmcvMKGMlacmRAwmb2hjaKm4MxBu2cdIY',
    baseURL:'https://api.302.ai/v1'
});

const main = async () => {
    const response = await client.images.generate({
        model: "dall-e-3",
        prompt: "A spaceship flying through the universe",
        n: 1,
        size: "1024x1024",
    })
    console.log(response.data)
}

main();
