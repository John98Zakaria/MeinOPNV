import {
    type GetNameFromList,
    isIntentRequest,
    mapGet,
} from '../helpers/type-utiils.js';
import { profile } from 'hafas-client/p/db/index.js';

import { type HandlerInput } from 'ask-sdk-core';
import { getSlotValues } from '../helpers/slot-extractors.js';
import { type deModel } from '../de-model.js';
import { createClient } from 'hafas-client';
import { type AlexaIntent, type BahnSkillIntent } from '../core/types.js';
import { IntentHandler } from '../core/handler-base.js';

export const bahnClient = createClient(profile, 'aws-lambda-bahn');

const GoToOrtIntent = { name: 'GoToOrt' } satisfies AlexaIntent;

type GoToOrtIntentType =
    (typeof deModel.interactionModel.languageModel.intents)[number] &
    typeof GoToOrtIntent;

type GoToOrtSlot = GetNameFromList<GoToOrtIntentType['slots']>;

export class GoToOrtHandler extends IntentHandler {
    myIntentName: BahnSkillIntent = 'GoToOrt';

    async doHandle(handlerInput: HandlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        // let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from GoToOrt. ';

        let slotStatus = '';
        if (!isIntentRequest(request)) {
            throw Error('Like this doesn\'t happen');
        }

        const slotValues = getSlotValues<GoToOrtSlot>(request.intent.slots);

        const ort = mapGet(slotValues, 'ort');

        if (ort.ERstatus === 'ER_SUCCESS_MATCH') {
            const kurmainKaserne = '000405243';
            const mainzGonsenheim = '008000068';

            const journey = await bahnClient.journeys(
                kurmainKaserne,
                mainzGonsenheim,
                { results: 2 },
            );
            const legs = journey.journeys?.at(0)?.legs ?? [];
            const firstLeg = journey.journeys?.at(0)?.legs[0];
            const lastLeg = journey.journeys?.at(0)?.legs[legs.length - 1];
            const departureDate = firstLeg?.departure ?? 'Error';
            const arrivalDate = lastLeg?.arrival ?? 'Error';
            const from = firstLeg?.origin?.name;
            const to = lastLeg?.destination?.name;

            const dateStart = new Date(Date.parse(departureDate));
            const dateEnd = new Date(Date.parse(arrivalDate));
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            say = `Die fahrt von ${from} zu ${to} startet um ${dateStart.getHours()}Uhr ${dateStart.getMinutes()} und kommt um ${dateEnd.getHours()}Uhr ${dateEnd.getMinutes()} an`;
        }
        if (ort.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            console.log(
                `***** consider adding ${
                    ort.heardAs ?? ''
                } to the custom slot type used by slot ort! `,
            );
        }

        if (ort.ERstatus === 'ER_SUCCESS_NO_MATCH' || ort.heardAs == null) {
            slotStatus += 'A few valid values are, arbeit,uni';
        }

        say += slotStatus;

        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    }
}
