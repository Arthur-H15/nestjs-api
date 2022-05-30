import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrdeDto } from './dto/create-orde.dto';
import { UpdateOrdeDto } from './dto/update-orde.dto';
import { Orde } from './entities/orde.entity';

@Injectable()
export class OrdesService {
  constructor(
    @InjectModel(Orde)
    private readonly ordeModel: typeof Orde,
  ) {}
  
  create(createOrdeDto: CreateOrdeDto) {
    return this.ordeModel.create({amount: createOrdeDto.amount});}
  

  findAll() {
    return this.ordeModel.findAll();
  }

  findOne(id: string) {
    return this.ordeModel.findByPk(id,{rejectOnEmpty:true});
  }

 async update(id: string, updateOrdeDto: UpdateOrdeDto) {
    const order =await this.findOne(id);
    
    return order.update(updateOrdeDto);;
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    order.destroy();
    
  }
}
