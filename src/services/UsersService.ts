import { getCustomRepository, Repository } from "typeorm";
import { User} from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService{
    private usersRepository: Repository<User>
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string){
        //Varificar se usuario exite

        const userExists = await this.usersRepository.findOne({
            email,
        });

        //Se existir, retornar user
        if(userExists){
            return userExists;
        }
        const user = this.usersRepository.create({
            email,
        });

        //Se nao existir,salva no bd 
        await this.usersRepository.save(user);
        return user;
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export {UsersService};