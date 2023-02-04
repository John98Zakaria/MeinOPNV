/* *
* This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
* Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
* session persistence, api calls, and more.
* */
import * as Alexa from 'ask-sdk-core';
import { RequestHandler } from 'ask-sdk-core';
import { Intent } from 'ask-sdk-model';
import {
    CancelAndStopIntentHandler,
    ErrorHandler_,
    FallbackIntentHandler,
    HelpIntentHandler,
    IntentReflectorHandler,
    LaunchRequestHandler,
    SessionEndedRequestHandler
} from './handlers/default-handlers.js';
import { isIntentRequest } from './helpers/type-utiils.js';
import { bahnClient } from './external-clients.js';




type SlotUnderstood = {
    heardAs: string | undefined,
    resolved: string,
    ERstatus: 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR'

}


function getSlotValues(filledSlots: Intent['slots']): Map<string | number, SlotUnderstood> {
    const slotValues: Map<string | number, SlotUnderstood> = new Map();
    if (filledSlots === undefined) {
        return new Map();
    }

    Object.keys(filledSlots).forEach((item: keyof typeof filledSlots) => {
        let slotItem = filledSlots[item];
        if (!slotItem) {
            throw Error('Null Error');
        }
        const name = slotItem.name;

        if (slotItem &&
            slotItem.resolutions &&
            slotItem.resolutions.resolutionsPerAuthority &&
            slotItem.resolutions.resolutionsPerAuthority[0] &&
            slotItem.resolutions.resolutionsPerAuthority[0].status &&
            slotItem.resolutions.resolutionsPerAuthority[0].status.code) {
            switch (slotItem.resolutions.resolutionsPerAuthority[0].status.code) {
                case 'ER_SUCCESS_MATCH':
                    slotValues.set(name, {
                        heardAs: slotItem.value,
                        resolved: slotItem.resolutions.resolutionsPerAuthority[0].values[0]?.value.name ?? 'Error',
                        ERstatus: 'ER_SUCCESS_MATCH'
                    });
                    break;
                case 'ER_SUCCESS_NO_MATCH':
                    slotValues.set(name, {
                        heardAs: slotItem.value,
                        resolved: '',
                        ERstatus: 'ER_SUCCESS_NO_MATCH'
                    });
                    break;
                default:
                    break;
            }
        } else {
            slotValues.set(name, {
                heardAs: slotItem.value,
                resolved: '',
                ERstatus: 'ER_ERROR'
            });
        }
    });

    return slotValues;
}


const GoToOrt_Handler: RequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'GoToOrt';
    },
    async handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        // let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from GoToOrt. ';

        let slotStatus = '';
        if (!isIntentRequest(request)) {
            throw Error('Like this doesn\'t happen');
        }


        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: ort
        let ort = slotValues.get('ort');
        if (!ort) {
            throw Error('Slot Value wtf');
        }
        if (ort.ERstatus === 'ER_SUCCESS_MATCH') {


            const kurmainKaserne = '000405243';
            const mainzGonsenheim = '008000068';

            const journey = await bahnClient.journeys(kurmainKaserne, mainzGonsenheim, { results: 2 });
            const legs = journey.journeys?.at(0)?.legs ?? [];
            let firstLeg = journey.journeys?.at(0)?.legs[0];
            let lastLeg = journey.journeys?.at(0)?.legs[legs.length - 1];
            const departureDate = firstLeg?.departure ?? 'Error';
            const arrivalDate = lastLeg?.arrival ?? 'Error';
            const from = firstLeg?.origin?.name;
            const to = lastLeg?.destination?.name;

            const dateStart = new Date(Date.parse(departureDate));
            const dateEnd = new Date(Date.parse(arrivalDate));
            say = `Die fahrt von ${from} zu ${to} startet um ${dateStart.getHours()}Uhr ${dateStart.getMinutes()} und kommt um ${dateEnd.getHours()}Uhr ${dateEnd.getMinutes()} an`;

        }
        if (ort.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + ort.heardAs + '" to the custom slot type used by slot ort! ');
        }

        if ((ort.ERstatus === 'ER_SUCCESS_NO_MATCH') || (!ort.heardAs)) {
            slotStatus += 'A few valid values are, arbeit,uni';
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    }
};

const HelloWorldIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        GoToOrt_Handler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler_)
    .withCustomUserAgent('Alexa-Wegweiser')
    .lambda();
