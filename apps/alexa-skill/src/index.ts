/* *
* This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
* Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
* session persistence, api calls, and more.
* */
import * as Alexa from 'ask-sdk-core';
import {
    CancelAndStopIntentHandler,
    ErrorHandler_,
    FallbackIntentHandler,
    HelpIntentHandler,
    IntentReflectorHandler,
    LaunchRequestHandler,
    SessionEndedRequestHandler
} from './handlers/default-handlers.js';
import {GoToOrt_Handler} from './handlers/go-to-ort.js';
import {AddStationHandler} from './handlers/add-station.js';
import {SentryInterceptor} from "./sentry.js";


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
import * as SentryAWS from '@sentry/serverless'
import {sentrySettings} from "./sentry-settings.js";
import {RequestEnvelope} from "ask-sdk-model";

SentryAWS.AWSLambda.init(sentrySettings);


export const skill =
    Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            LaunchRequestHandler,
            HelpIntentHandler,
            CancelAndStopIntentHandler,
            FallbackIntentHandler,
            GoToOrt_Handler,
            SessionEndedRequestHandler,
            AddStationHandler,
            IntentReflectorHandler)
        .addErrorHandlers(
            ErrorHandler_).addRequestInterceptors(new SentryInterceptor())
        .withCustomUserAgent('Alexa-Wegweiser')
        .create();

export const handler = SentryAWS.AWSLambda.wrapHandler(async (requestData: RequestEnvelope, context) => {
    // await SentryAWS.flush();
    return await skill.invoke(requestData, context)
});
