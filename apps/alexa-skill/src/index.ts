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
import { GoToOrt_Handler } from './handlers/go-to-ort.js';
import { AddStationHandler } from './handlers/add-station.js';


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */

export const handler = Alexa.SkillBuilders.custom()
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
        ErrorHandler_)
    .withCustomUserAgent('Alexa-Wegweiser')
    .lambda();
