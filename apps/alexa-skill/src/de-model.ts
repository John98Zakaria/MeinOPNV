export const deModel = {
    'interactionModel': {
        'languageModel': {
            'invocationName': 'fahr mich',
            'intents': [{ 'name': 'AMAZON.CancelIntent', 'samples': [] }, {
                'name': 'AMAZON.HelpIntent',
                'samples': []
            }, { 'name': 'AMAZON.StopIntent', 'samples': [] }, {
                'name': 'HelloWorldIntent',
                'slots': [],
                'samples': ['hallo', 'wie geht\'s dir', 'sag hallo welt', 'sag hallo']
            }, { 'name': 'AMAZON.NavigateHomeIntent', 'samples': [] }, {
                'name': 'AMAZON.FallbackIntent',
                'samples': []
            }, {
                'name': 'GoToOrt',
                'slots': [{ 'name': 'ort', 'type': 'Ort' }],
                'samples': ['zum {ort}', 'zu {ort}', 'nach {ort}', 'zur {ort}']
            }],
            'types': [{
                'values': [{ 'name': { 'value': 'Arbeit', 'synonyms': ['job'] } }, {
                    'name': {
                        'value': 'Uni',
                        'synonyms': ['Universität']
                    }
                }], 'name': 'Ort'
            }]
        }
    }, 'version': '9'
} as const;
