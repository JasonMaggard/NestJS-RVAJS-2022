"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlHelloResolver = exports.Hello = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_hello_service_1 = require("./graphql-hello.service");
let Hello = class Hello {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Hello.prototype, "hello", void 0);
Hello = __decorate([
    (0, graphql_1.ObjectType)()
], Hello);
exports.Hello = Hello;
let GraphqlHelloResolver = class GraphqlHelloResolver {
    constructor(hello) {
        this.hello = hello;
    }
    sayHello(name) {
        return this.hello.sayHello(name);
    }
};
__decorate([
    (0, graphql_1.Query)(() => Hello),
    __param(0, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GraphqlHelloResolver.prototype, "sayHello", null);
GraphqlHelloResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [graphql_hello_service_1.GraphqlHelloService])
], GraphqlHelloResolver);
exports.GraphqlHelloResolver = GraphqlHelloResolver;
//# sourceMappingURL=graphql-hello.resolver.js.map