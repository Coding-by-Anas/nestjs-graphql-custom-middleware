import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import * as uuid from "uuid";

import { isMobileEnvironmentUserAgentPresent } from 'src/utils';

@Injectable()
export class CheckmobileenvironmentGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req;

    const hasMobileUserAgent = isMobileEnvironmentUserAgentPresent(request);

    if (hasMobileUserAgent) {

      // Generate requestId
      request.params.requestId = uuid.v4();

      return true;
    }

    throw new BadRequestException("Please use mobile phone to make the request");

  }
}
