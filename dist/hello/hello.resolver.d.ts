import { HelloDataService } from './hello-data/hello-data.service';
export declare class Hello {
    hello: string;
}
export declare class HelloResolver {
    private hello;
    constructor(hello: HelloDataService);
    sayHello(name: string): {
        hello: string;
    };
}
