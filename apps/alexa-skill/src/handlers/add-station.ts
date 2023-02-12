import { isExpectedIntent, isIntentRequest } from '../helpers/type-utiils.js';
import { prisma } from '../external-clients.js';
import { IntentHandler } from '../core/handler-base.js';
import { type HandlerInput } from 'ask-sdk-core';

// const AddStationIntent = { name: 'AddStationIntent' } satisfies AlexaIntent;
// type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & typeof AddStationIntent)

// type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export class AddStationHandler extends IntentHandler {
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

        console.log(request.intent.slots);
        let say = '';
        try {
            await prisma.user.create({
                data: {
                    alexaUserId: Math.random().toString(),
                    alexaDevices: [],
                    userLocations: [],
                    userStations: [{
                        type: 'station',
                        stationId: '1232',
                        stationName: 'Meaxa',
                        userAssociatedName: 'AlexaBro',
                    }],
                },
            });
        } catch (e) {
            console.error(e);
            say = 'Error';
        }


        return responseBuilder.speak(say === '' ? 'Wahle Ding' : say).getResponse();
    }


}
