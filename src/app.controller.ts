import {Controller, Get, Render, Res, Redirect, UseInterceptors} from '@nestjs/common';
import { Response } from 'express';
import {TimingInterceptor} from "./TimingInterceptor";
@UseInterceptors(new TimingInterceptor())
@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHome(){
    return {
      title: 'Главная'
    };
  }

  @Get('catalog')
  @Render('catalog')
  catalog(){
    return { message: 'Hello World!', };
  }

  @Get('feedbacks')
  @Render('feedbacks')
  feedbacks(){
    return { message: 'Hello World!'};
  }


  @Get('delivery')
  @Render('delivery')
  delivery(){
    return { message: 'Hello World!', };
  }

  @Get('registration')
  @Render('registration')
  registration(){
    return { message: 'Hello World!'};
  }

  @Get('return-to-main')
  @Redirect('/')
  returnToMain() {}
}