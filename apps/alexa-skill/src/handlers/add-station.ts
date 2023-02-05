import { RequestHandler } from 'ask-sdk-core';
import { canHandleTypesafe, GetNameFromList, isIntentRequest } from '../helpers/type-utiils.js';
import { getSlotValues } from '../helpers/slot-extractors.js';
import { deModel } from '../de-model.js';
import { AlexaIntent } from '../types.js';

const AddStationIntent: AlexaIntent = { name: 'AddStationIntent' } as const;
type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & typeof AddStationIntent)

type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export const AddStationHandler: RequestHandler = {
    canHandle(handlerInput) {
        return canHandleTypesafe(handlerInput, 'AddStationIntent');
    },
    async handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        if (!isIntentRequest(request)) {
            throw Error('Like this doesn\'t happen');
        }

        let slotValues = getSlotValues<AddStationSlot>(request.intent.slots);
        let bekannterOrt = slotValues.get('bekannterOrt');
        let adresse = slotValues.get('adresse');
        let ListChoice = slotValues.get('ListChoice');
        console.log(request.intent.slots);

        return responseBuilder.speak(`Bekannter Ort ${bekannterOrt},
         adresse ${adresse}, wahl ${ListChoice}`).getResponse();
    }


};
