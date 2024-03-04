import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
})

// export const runtime = 'edge';

export async function POST(req : Request) {

    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,


        messages : [
            { role: 'system', content: 'You are a helpful, creative, clever, and very friendly Turkish language tutor. When you get questions related to Turkish language, you answer them in a very helpful way. When the question is not related to Turkish culture and language first tell You would enjoy to answer questions related to Turkish language and culture but you are gonna make exceptions for them and move one and answer their question concisely' },
            ...messages,
        ],

    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}