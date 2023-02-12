import { type HandlerInput, type RequestHandler } from 'ask-sdk-core';
import * as SentryAWS from '@sentry/serverless';
import { type Response } from 'ask-sdk-model';
import { isExpectedIntent } from '../helpers/type-utiils.js';
import { type BahnSkillIntent } from './types.js';


export abstract class IntentHandler implements RequestHandler {
    abstract readonly myIntentName: BahnSkillIntent;

    canHandle(input: HandlerInput): Promise<boolean> | boolean {
        return isExpectedIntent(input, this.myIntentName);
    }

    handle(input: HandlerInput): Promise<Response> | Response {
        const transaction = SentryAWS.startTransaction({
            name: this.myIntentName,
        });
        const response = this.doHandle(input);
        transaction.finish();
        return response;
    }

    abstract doHandle(input: HandlerInput): Promise<Response> | Response;

}
