import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService{
    async create(email: string){
        const usersRepository = getCustomRepository(UsersRepository);
        //Varificar se usuario exite

        const userExists = await usersRepository.findOne({
            email,
        });

        //Se existir, retornar user
        if(userExists){
            return userExists;
        }
        const user = usersRepository.create({
            email
        });

        //Se nao existir,salva no bd 
        await usersRepository.save(user);
        return user;
    }
}

export {UsersService};