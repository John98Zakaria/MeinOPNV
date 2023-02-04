import { IntentRequest, Request } from 'ask-sdk-model';
import * as Alexa from 'ask-sdk-core';
import { HandlerInput } from 'ask-sdk-core';
import { BahnSkillIntent } from '../types.js';

export type GetNameFromList<T extends readonly { name: string }[]> = T[number]['name'];
export type StripPrefix<
    TPrefix extends string,
    T extends string,
> = T extends `${TPrefix}.${infer R}` ? R : never;

export function isIntentRequest(request: Request): request is IntentRequest {
    return request.type === 'IntentRequest';
}

export function canHandleTypesafe(handlerInput: HandlerInput, expectedIntent: BahnSkillIntent) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === expectedIntent;
}
