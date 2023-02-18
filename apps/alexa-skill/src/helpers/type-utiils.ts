import { type IntentRequest, type Request } from 'ask-sdk-model';
import * as Alexa from 'ask-sdk-core';
import { type HandlerInput } from 'ask-sdk-core';
import { type BahnSkillIntent } from '../core/types.js';

export type GetNameFromList<T extends ReadonlyArray<{ name: string }>> =
    T[number]['name'];
export type StripPrefix<
    TPrefix extends string,
    T extends string,
> = T extends `${TPrefix}.${infer R}` ? R : never;

export function isIntentRequest(request: Request): request is IntentRequest {
    return request.type === 'IntentRequest';
}

export function isExpectedIntent(
    handlerInput: HandlerInput,
    expectedIntent: BahnSkillIntent,
) {
    return Alexa.getIntentName(handlerInput.requestEnvelope) === expectedIntent;
}

export function mapGet<T extends string | number, K>(
    mapping: Map<T, K>,
    key: T,
): K {
    const item = mapping.get(key);
    if (item === undefined) {
        throw TypeError(`Expected mapping to contain ${key}`);
    }
    return item;
}
