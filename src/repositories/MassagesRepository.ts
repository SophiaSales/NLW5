import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MassagesRepository extends Repository<Message>{}

export{MassagesRepository}