import {canHandleTypesafe, GetNameFromList, isIntentRequest} from '../helpers/type-utiils.js';
import {profile} from 'hafas-client/p/db/index.js';


import {RequestHandler} from 'ask-sdk-core';
import {getSlotValues} from '../helpers/slot-extractors.js';
import {deModel} from '../de-model.js';
import {createClient} from 'hafas-client';

export const bahnClient = createClient(profile, 'aws-lambda-bahn');

type AddStationIntentType = (typeof deModel.interactionModel.languageModel.intents[number] & { name: 'AddStationIntent' })

type AddStationSlot = GetNameFromList<AddStationIntentType['slots']>

export const GoToOrt_Handler: RequestHandler = {
    canHandle(handlerInput) {
        return canHandleTypesafe(handlerInput, 'GoToOrt');
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

            const journey = await bahnClient.journeys(kurmainKaserne, mainzGonsenheim, {results: 2});
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
