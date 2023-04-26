import express from "express"
import _default from "ts-jest";
// import { router } from "./router"

export class App {

    public server: express.Application = express();

    constructor() {
        this.server;
        this.middleWare();
        this.router();
        this.listen();
    }

    private middleWare() {
        this.server.use(express.json())
    }

    private router() {
        //console.log("Teste")
        // this.server.use(router)
    }

    private listen(){

    }
}