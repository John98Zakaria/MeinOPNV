import { type GetNameFromList, isExpectedIntent, isIntentRequest } from '../helpers/type-utiils.js';
import { IntentHandler } from '../core/handler-base.js';
import { type HandlerInput } from 'ask-sdk-core';
import { getSlotValues } from '../helpers/slot-extractors.js';
import { type deModel } from '../de-model.js';
import { type AlexaIntent } from '../core/types.js';

const AddStationIntent = { name: 'AddStationIntent' } satisfies AlexaIntent;
type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & typeof AddStationIntent)

type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export class AddStationHandlerStart extends IntentHandler {
    myIntentName = 'AddStationIntent' as const;


    canHandle(handlerInput: HandlerInput) {
        return isExpectedIntent(handlerInput, 'AddStationIntent')
        && 'dialogState' in handlerInput.requestEnvelope.request ?
            handlerInput.requestEnvelope.request.dialogState !== 'COMPLETED' : false;
    }

    async doHandle(handlerInput: HandlerInput) {
        return handlerInput
            .responseBuilder
            .addElicitSlotDirective('adresse')
            .addElicitSlotDirective('bekannterOrt')
            .getResponse();
    }
}


export class AddStationHandlerSearchLocation extends IntentHandler {
    myIntentName = 'AddStationIntent' as const;


    canHandle(handlerInput: HandlerInput) {
        return isExpectedIntent(handlerInput, 'AddStationIntent');
    }

    async doHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        console.log(handlerInput);
        if (!isIntentRequest(request)) {
            return responseBuilder.speak('SHIT').getResponse();
        }

        const slots = getSlotValues<AddStationSlot>(request.intent.slots);

        const ort = slots.get('bekannterOrt');
        const adresse = slots.get('bekannterOrt');
        const listChoice = slots.get('listChoice');

        console.log(ort, adresse, listChoice);


        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return responseBuilder.speak(`ort ${ort?.heardAs} adresse ${adresse?.heardAs} listChoice ${listChoice?.heardAs} `).getResponse();
    }


}
