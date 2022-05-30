import { Module } from '@nestjs/common';
import { OrdesService } from './ordes.service';
import { OrdesController } from './ordes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orde } from './entities/orde.entity';

@Module({
  imports:[SequelizeModule.forFeature([Orde])], 
  controllers: [OrdesController],
  providers: [OrdesService]
})
export class OrdesModule {}
