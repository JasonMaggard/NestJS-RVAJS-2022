import { HelloDataService } from './hello-data/hello-data.service';
interface HelloReturn {
    hello: string;
}
export declare class HelloController {
    private hello;
    constructor(hello: HelloDataService);
    sayHello(name: string): Promise<HelloReturn>;
}
export {};
