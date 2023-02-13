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
        const parentTransaction = SentryAWS.getCurrentHub().getScope()?.getTransaction();
        if (parentTransaction === undefined) {
            console.warn('Was not able to find senty parent transaction');
            return this.doHandle(input);
        }
        const childTransaction = parentTransaction.startChild({
            op: this.myIntentName,
            description: this.myIntentName,
        });
        const response = this.doHandle(input);
        childTransaction.finish();
        return response;
    }

    abstract doHandle(input: HandlerInput): Promise<Response> | Response;

}
