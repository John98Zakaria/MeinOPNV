import * as Alexa from 'ask-sdk-core';

import * as SentryAWS from '@sentry/serverless';
import { type Response } from 'ask-sdk-model';
import { type Transaction } from '@sentry/tracing';

export class SentryRequestInterceptor implements Alexa.RequestInterceptor {
    async process(input: Alexa.HandlerInput) {
        const transaction = SentryAWS.startTransaction({
            name: Alexa.getIntentName(input.requestEnvelope),
            tags: { 'requestType': Alexa.getRequestType(input.requestEnvelope) },
        });
        input.context = { 'sentryTransaction': transaction };
    }
}

export class SentryResponseInterceptor implements Alexa.ResponseInterceptor {
    process(input: Alexa.HandlerInput, output?: Response) {
        const transaction: Transaction | undefined = input.context.sentryTransaction;
        transaction?.finish();
        return undefined;
    }

}
