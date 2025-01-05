import { Injectable } from '@nestjs/common';
const { GoogleGenerativeAI } = require("@google/generative-ai");

@Injectable()
export class GoogleaiService {

    private readonly genAI = new GoogleGenerativeAI(process.env.GOOGLE_TOKEN);
    private readonly model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async createPrompt(msg:string){
    const result = await this.model.generateContent(msg);
console.log(result.response.text());
    return result
}

}
