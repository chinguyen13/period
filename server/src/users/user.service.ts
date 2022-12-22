import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";


@Injectable()
export class UserService{
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ){}

  async save(userDto: UserDto): Promise<UserDto>{
    return await this.userRepository.save(userDto);
  }

  async find(data: any): Promise<UserDto[]>{
    const name = data.name;
    const page = data.page;
    const space_index = name? name.indexOf(' ') : null;
    return await this.userRepository.createQueryBuilder()
    .select(['id', 'department', 'company', 'email'])
    .addSelect('CONCAT(lastName, " ", firstName)', 'fullName')
    .where(`CONCAT(lastName, " ", firstName) LIKE "%${name ? space_index !== -1 ? name.substring(0,space_index): name : ''}%" 
    OR CONCAT(lastName, " ", firstName) LIKE "%${name ? name.substring(name.indexOf(' ')+1) : ''}%"
    `)
    .limit(10)
    .offset((page-1)*10)
    .getRawMany();
  }

  async count(){
    return await this.userRepository.count();
  }

  async findOne(id: number): Promise<UserDto>{
    return await this.userRepository.findOneBy({id: id});
  }

  async deleteUsers(ids: number[]){
    return await this.userRepository.createQueryBuilder()
    .delete()
    .where(`id In(${ids.join(',')})`)
    .execute();
  }

}