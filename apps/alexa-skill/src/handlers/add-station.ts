import {RequestHandler} from 'ask-sdk-core';
import {canHandleTypesafe, GetNameFromList, isIntentRequest} from '../helpers/type-utiils.js';
import {getSlotValues} from '../helpers/slot-extractors.js';
import {deModel} from '../de-model.js';
import {AlexaIntent} from '../types.js';
import {bahnClient, prisma} from "../external-clients.js";
import * as Sentry from '@sentry/serverless'

const AddStationIntent: AlexaIntent = {name: 'AddStationIntent'} as const;
type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & typeof AddStationIntent)

type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export const AddStationHandler: RequestHandler = {
    canHandle(handlerInput) {
        return canHandleTypesafe(handlerInput, 'AddStationIntent');
    },
    async handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        console.log(handlerInput)
        if (!isIntentRequest(request)) {
            return responseBuilder.speak("SHIT").getResponse();
        }

        let slotValues = getSlotValues<AddStationSlot>(request.intent.slots);
        let bekannterOrt = slotValues.get('bekannterOrt');
        let adresse = slotValues.get('adresse');
        try {
            const locations = await bahnClient.locations("kurmainz kaserne", undefined)

            console.log(locations)
            console.log(bekannterOrt)


        } catch (e) {
            Sentry.AWSLambda.captureException(e)

            console.log(bekannterOrt.resolved)
            console.log("error bahmn")
        }
        let ListChoice = slotValues.get('ListChoice');
        console.log(request.intent.slots);
        let say = ''
        try {
            await prisma.user.create({
                data: {
                    alexaUserId: Math.random().toString(),
                    alexaDevices: [],
                    userLocations: [],
                    userStations: [{
                        type: "station",
                        stationId: '1232',
                        stationName: "Meaxa",
                        userAssociatedName: "AlexaBro"
                    }]
                }
            });
        } catch (e) {
            console.error(e)
            say = "Error"
        }

        throw new Error("Senttry please sleeps")


        return responseBuilder.speak(say == '' ? 'Wahle Ding' : say).getResponse();
    }


};
