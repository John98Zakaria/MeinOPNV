import * as Alexa from 'ask-sdk-core';
import {
    CancelAndStopIntentHandler,
    ErrorHandler_,
    FallbackIntentHandler,
    HelpIntentHandler,
    IntentReflectorHandler,
    LaunchRequestHandler,
    SessionEndedRequestHandler,
} from './handlers/default-handlers.js';
import { GoToOrtHandler } from './handlers/go-to-ort.js';
import {
    AddStationHandlerGetLocationName,
    AddStationHandlerSearchLocation,
    AddStationHandlerStart,
    AddStationHandlerStore,
} from './handlers/add-station.js';
import * as SentryAWS from '@sentry/serverless';
import { sentrySettings } from './sentry-settings.js';
import { type RequestEnvelope } from 'ask-sdk-model';

SentryAWS.AWSLambda.init(sentrySettings);

export const skill = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        new HelpIntentHandler(),
        new CancelAndStopIntentHandler(),
        new FallbackIntentHandler(),
        new GoToOrtHandler(),
        SessionEndedRequestHandler,
        new AddStationHandlerStart(),
        new AddStationHandlerGetLocationName(),
        new AddStationHandlerSearchLocation(),
        new AddStationHandlerStore(),
        IntentReflectorHandler,
    )
    .addErrorHandlers(ErrorHandler_)
    .withCustomUserAgent('Alexa-Wegweiser')
    .create();

export const handler = SentryAWS.AWSLambda.wrapHandler(
    async (requestData: RequestEnvelope, context) => {
        return await skill.invoke(requestData, context);
    },
);
