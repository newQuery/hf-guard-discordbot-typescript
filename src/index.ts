import Server from "./infra/server";
import {TagModel} from "./domain/tag.model";

TagModel.sync();

const server = new Server(4000);

server.start();
