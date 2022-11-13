import { GraphqlHelloService } from './graphql-hello.service';
export declare class Hello {
    hello: string;
}
export declare class GraphqlHelloResolver {
    private hello;
    constructor(hello: GraphqlHelloService);
    sayHello(name: string): {
        hello: string;
    };
}
