import * as Alexa from 'ask-sdk-core';

export class SentryInterceptor implements Alexa.RequestInterceptor {
    async process() {
        console.log(__dirname)
        console.log(process.cwd())
    }
}
