import { Controller, Post, Body } from '@nestjs/common';
import { GoogleaiService } from './googleai.service';

@Controller('googleai')
export class GoogleaiController {
    constructor(private googleaiService:GoogleaiService){}

    @Post('create')
    async createPrompt(@Body('message') message:string){
        return this.googleaiService.createPrompt(message)
    }

    // @Post('login')
    // async login(@Body() dto:any){
    //     return this.googleaiService.loginWithGoogle(dto)
    // }
}
