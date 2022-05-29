import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods:["options","put","get","delete","post","patch"],
    origin:"*"
  })
  app.use(function(req,res,next){
    next();
  });
  // Swagger
  const config = new DocumentBuilder()
    .setTitle('student management server API documentation')
    .setVersion('0.0.2')
    .setDescription("api文档用于前后端对接")
    .build();
  const docs = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('docs-api', app, docs);
  // end Swagger

  // load static resource
  // end load
  
  await app.listen(1966,()=>{
    Logger.log('http://localhost:1966/docs-api',"STARTUP");
  });
}
bootstrap();
