import { type GetNameFromList, isExpectedIntent, isIntentRequest, mapGet } from '../helpers/type-utiils.js';
import { IntentHandler } from '../core/handler-base.js';
import { type HandlerInput } from 'ask-sdk-core';
import { getSlotValues } from '../helpers/slot-extractors.js';
import { type deModel } from '../de-model.js';
import { type AlexaIntent } from '../core/types.js';
import { bahnClient } from '../external-clients.js';
import { type Station } from 'hafas-client';

const AddStationIntent = { name: 'AddStationIntent' } satisfies AlexaIntent;
type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & typeof AddStationIntent)

type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export class AddStationHandlerStart extends IntentHandler {
    myIntentName = 'AddStationIntent' as const;


    canHandle(handlerInput: HandlerInput) {
        return isExpectedIntent(handlerInput, 'AddStationIntent')
        && 'dialogState' in handlerInput.requestEnvelope.request ?
            handlerInput.requestEnvelope.request.dialogState === 'STARTED' : false;
    }

    async doHandle(handlerInput: HandlerInput) {
        if (!isIntentRequest(handlerInput.requestEnvelope.request)) {
            throw Error('NotIntentRequest');
        }

        return handlerInput
            .responseBuilder
            .addDelegateDirective()
            .getResponse();
    }
}


export class AddStationHandlerSearchLocation extends IntentHandler {
    myIntentName = 'AddStationIntent' as const;


    canHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        if (!isIntentRequest(request)) {
            return false;
        }
        return isExpectedIntent(handlerInput, 'AddStationIntent')
            && request.dialogState === 'IN_PROGRESS'
            // User didn't choose yet
            && request.intent.slots?.listChoice.value === undefined;
    }

    async doHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        console.log(handlerInput);
        if (!isIntentRequest(request)) {
            return responseBuilder.speak('SHIT').getResponse();
        }

        const slots = getSlotValues<AddStationSlot>(request.intent.slots);

        const ort = mapGet(slots, 'bekannterOrt');
        const adresse = mapGet(slots, 'adresse');
        const listChoice = slots.get('listChoice');

        console.log(ort, adresse, listChoice);

        const choices = await bahnClient.locations(adresse.heardAs as string, { results: 5 });
        const sessionAttribs = handlerInput.attributesManager.getSessionAttributes();
        sessionAttribs.bahn = choices;
        handlerInput.attributesManager.setSessionAttributes(sessionAttribs);


        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return responseBuilder.speak(choices.map(item => item.name).join(',')).addElicitSlotDirective('listChoice').getResponse();
    }


}

export class AddStationHandlerStore extends IntentHandler {
    myIntentName = 'AddStationIntent' as const;


    canHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        if (!isIntentRequest(request)) {
            return false;
        }
        return isExpectedIntent(handlerInput, 'AddStationIntent') && request.intent.slots?.listChoice.value !== undefined;

    }

    async doHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        if (!isIntentRequest(request)) {
            return responseBuilder.speak('SHIT').getResponse();
        }

        const slots = getSlotValues<AddStationSlot>(request.intent.slots);

        const ort = mapGet(slots, 'bekannterOrt');
        const adresse = mapGet(slots, 'adresse');
        const listChoice = slots.get('listChoice');

        console.log(ort, adresse, listChoice);


        const sessionAttribs = handlerInput.attributesManager.getSessionAttributes();
        const bahnMoglichkeiten: Station[] = sessionAttribs.bahn;
        console.log(bahnMoglichkeiten);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const finalStation: Station | undefined = bahnMoglichkeiten[parseInt(listChoice.heardAs, 10)];
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return responseBuilder.speak(finalStation.name ?? 'unknown').getResponse();
    }


}
