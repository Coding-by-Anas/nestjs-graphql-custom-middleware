import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CheckmobileenvironmentGuard } from './guards';

@Resolver()
export class AppResolver {
    @Query(() => String)
    async getName(): Promise<string> {
        return 'Coding by Anas';
    }

    @UseGuards(CheckmobileenvironmentGuard)
    @Mutation(() => String)
    async helloWorld(@Context("req") req: any): Promise<string> {
        return `Hello World \n requestId: ${req.params.requestId}`;
    }
}
