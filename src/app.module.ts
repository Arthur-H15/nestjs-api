import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Orde } from './ordes/entities/orde.entity';
import { OrdesModule } from './ordes/ordes.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname,'database.sqlite'),
      autoLoadModels: true,
      models:[Orde]
    }),
    OrdesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
