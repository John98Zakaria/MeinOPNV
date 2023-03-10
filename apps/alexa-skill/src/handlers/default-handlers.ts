import * as Alexa from 'ask-sdk-core';
import {
    type ErrorHandler,
    type HandlerInput,
    type RequestHandler,
} from 'ask-sdk-core';
import * as Sentry from '@sentry/serverless';
import { isExpectedIntent } from '../helpers/type-utiils.js';
import { IntentHandler } from '../core/handler-base.js';
import { type BahnSkillIntent } from '../core/types.js';

export const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) ===
            'LaunchRequest'
        );
    },
    async handle(handlerInput) {
        const speakOutput = 'Welcome, you can say Zur Arbeit';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};

export class HelpIntentHandler extends IntentHandler {
    myIntentName: BahnSkillIntent = 'AMAZON.HelpIntent' as const;

    doHandle(handlerInput: HandlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

export class CancelAndStopIntentHandler extends IntentHandler {
    myIntentName: BahnSkillIntent = 'AMAZON.StopIntent';

    canHandle(handlerInput: HandlerInput) {
        return (
            isExpectedIntent(handlerInput, 'AMAZON.CancelIntent') ||
            isExpectedIntent(handlerInput, 'AMAZON.StopIntent')
        );
    }

    doHandle(handlerInput: HandlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    }
}

/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet
 * */
export class FallbackIntentHandler extends IntentHandler {
    myIntentName: BahnSkillIntent = 'AMAZON.FallbackIntent';

    doHandle(handlerInput: HandlerInput) {
        const speakOutput =
            'Leider habe ich dich nicht verstanden, versuche es nochmal';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs
 * */
export const SessionEndedRequestHandler: RequestHandler = {
    canHandle(handlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) ===
            'SessionEndedRequest'
        );
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    },
};

/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents
 * by defining them above, then also adding them to the request handler chain below
 * */
export const IntentReflectorHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) ===
            'IntentRequest'
        );
    },
    handle(handlerInput: HandlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    },
};

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
export const ErrorHandler_: ErrorHandler = {
    canHandle() {
        return true;
    },
    async handle(handlerInput, error) {
        const speakOutput =
            'Sorry, I had trouble doing what you asked. Please try again.';
        Sentry.withScope((scope) => {
            Sentry.captureException(error, scope);
            Sentry.setContext('Handler Data', handlerInput);
        });

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
