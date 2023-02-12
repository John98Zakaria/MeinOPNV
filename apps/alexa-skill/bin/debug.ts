import { skill } from '../src/index.js';

function makeRequest(ding: any): any {
    return { requestEnvelope: ding };
}

const ding = makeRequest({
    'version': '1.0',
    'session': {
        'new': false,
        'sessionId': 'amzn1.echo-api.session.d44a4121-b059-4295-8289-4b12103ff647',
        'application': {
            'applicationId': 'amzn1.ask.skill.89f9587f-84f1-4005-9478-f0844a5221f1',
        },
        'attributes': {},
        'user': {
            'userId': 'amzn1.ask.account.AG5SV3EQZAXMFDRPHB6QUVRZYM6EMQCC2TVD2Y46633W36BGR4L7URGHCIGPD2HCIHEFN2OA5XHLOTUUG5XIS4XXJA7ZGRJKUUOKZRDXYRIWNKVCZYWMSQ2RRI74JUQ2QKES6E7YATNWXVIQWD37KJSJG2UWTC6IBVQRATBQVP3K6FWTCMKUSKRNNUB3UJXIL353HO2VVEMLEOQ',
        },
    },
    'context': {
        'Viewports': [
            {
                'type': 'APL',
                'id': 'main',
                'shape': 'RECTANGLE',
                'dpi': 213,
                'presentationType': 'STANDARD',
                'canRotate': false,
                'configuration': {
                    'current': {
                        'mode': 'HUB',
                        'video': {
                            'codecs': [
                                'H_264_42',
                                'H_264_41',
                            ],
                        },
                        'size': {
                            'type': 'DISCRETE',
                            'pixelWidth': 1280,
                            'pixelHeight': 800,
                        },
                    },
                },
            },
        ],
        'Viewport': {
            'experiences': [
                {
                    'arcMinuteWidth': 346,
                    'arcMinuteHeight': 216,
                    'canRotate': false,
                    'canResize': false,
                },
            ],
            'mode': 'HUB',
            'shape': 'RECTANGLE',
            'pixelWidth': 1280,
            'pixelHeight': 800,
            'dpi': 213,
            'currentPixelWidth': 1280,
            'currentPixelHeight': 800,
            'touch': [
                'SINGLE',
            ],
            'video': {
                'codecs': [
                    'H_264_42',
                    'H_264_41',
                ],
            },
        },
        'Extensions': {
            'available': {
                'aplext:backstack:10': {},
            },
        },
        'System': {
            'application': {
                'applicationId': 'amzn1.ask.skill.89f9587f-84f1-4005-9478-f0844a5221f1',
            },
            'user': {
                'userId': 'amzn1.ask.account.AG5SV3EQZAXMFDRPHB6QUVRZYM6EMQCC2TVD2Y46633W36BGR4L7URGHCIGPD2HCIHEFN2OA5XHLOTUUG5XIS4XXJA7ZGRJKUUOKZRDXYRIWNKVCZYWMSQ2RRI74JUQ2QKES6E7YATNWXVIQWD37KJSJG2UWTC6IBVQRATBQVP3K6FWTCMKUSKRNNUB3UJXIL353HO2VVEMLEOQ',
            },
            'device': {
                'deviceId': 'amzn1.ask.device.AH66SKW2ZHCGN7E3YDCKIERKYGWZEF4VRCP5VGKBZ322FFDQEZWKIWB54S64ICIK44VMOMSKCSIEAXLUGHGLJEUVYFHZEESZ5FQTNJ7R7BVU2ZFZLWNJDMXFVEI5YXF2MCBZ77W237TGC6P3L3CR52HN5Y7KXYILUFHCLRVMOU62V2I3F73VG',
                'supportedInterfaces': {},
            },
            'apiEndpoint': 'https://api.eu.amazonalexa.com',
            'apiAccessToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5ldS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjg5Zjk1ODdmLTg0ZjEtNDAwNS05NDc4LWYwODQ0YTUyMjFmMSIsImV4cCI6MTY3NTk4ODEyMCwiaWF0IjoxNjc1OTg3ODIwLCJuYmYiOjE2NzU5ODc4MjAsInByaXZhdGVDbGFpbXMiOnsiY29udGV4dCI6IkFBQUFBQUFBQVFCV0pHeTZlOEE3Ly94RFlEcGkrRUZtS2dFQUFBQUFBQUN5bnpsb2thM1B1bzZPWnEzNEVNTFpuZndwbDdGL3RKUEVROTVLbURvaVFWNnpnSUp2RERySkE1d2RvTFp2WjZqRkQyWHpSNUx3MDN2OXdMWkFSWDFTa0VMYVhlMTl1eDhmeUtSNlYweDRkV0VBWDNyTUozV2lOTEtyTmptb0RhYlE5aktTY2ZYYmxPWjYxL1pHcHc4b2lZSlEzRTZJRjVHWDJEOWZ2emRuN21mQm0xTGs4OHhLajRvaFh4Vm1SRVZ0TXVIckVuTkVKaW1FcTN1RCtZRTdRZWNYdGIyNzNuTEk4VE9LUWpPWkpaNUpFQWU1ZFNTeDRtalBDcWZ4dVFYZGNiMHlCaXpZcmlxQzVISWhjZytaSGVLSVZKSVlpNVlBNnUzdStuREZLU1JNandrZkd1UjdDRGdGYnVjeFVQaFVzRGZibGdnUjdrZWM1aHdlcnY1YUFkcnZmTDJVUDR4RzB1UlFocnV6TGlsNjFkeTNOVXBydDZMT3UrbDVvVDdac2kyR2xXd3doWDZKIiwiZGV2aWNlSWQiOiJhbXpuMS5hc2suZGV2aWNlLkFINjZTS1cyWkhDR043RTNZRENLSUVSS1lHV1pFRjRWUkNQNVZHS0JaMzIyRkZEUUVaV0tJV0I1NFM2NElDSUs0NFZNT01TS0NTSUVBWExVR0hHTEpFVVZZRkhaRUVTWjVGUVROSjdSN0JWVTJaRlpMV05KRE1YRlZFSTVZWEYyTUNCWjc3VzIzN1RHQzZQM0wzQ1I1MkhONVk3S1hZSUxVRkhDTFJWTU9VNjJWMkkzRjczVkciLCJ1c2VySWQiOiJhbXpuMS5hc2suYWNjb3VudC5BRzVTVjNFUVpBWE1GRFJQSEI2UVVWUlpZTTZFTVFDQzJUVkQyWTQ2NjMzVzM2QkdSNEw3VVJHSENJR1BEMkhDSUhFRk4yT0E1WEhMT1RVVUc1WElTNFhYSkE3WkdSSktVVU9LWlJEWFlSSVdOS1ZDWllXTVNRMlJSSTc0SlVRMlFLRVM2RTdZQVROV1hWSVFXRDM3S0pTSkcyVVdUQzZJQlZRUkFUQlFWUDNLNkZXVENNS1VTS1JOTlVCM1VKWElMMzUzSE8yVlZFTUxFT1EifX0.PbTPErbPqwR7BLHofVNU-t5JO6peVlWTrQFmcgUzOBc55duXDK_0WYsBMXfmAEIQizxYzyJtTmsjwdfqySUXXd-3ycQfr7adqLmOtx0t3PqjlzIqU__3bccxIjPG0KnOSgEITMKK3ZoChsz63GKusOy-rhwEWPHyRi3_XDbWfrrZPADjhnbm5uNL0XkIm_IiSSBCNdOxNbsVG6EFDC_k6otMsEYwCaVEA9Dm9TPgMzwWxwU5EYOYqaCZyk-7WwKSOZ1yYOaXK1dGePiCoI0j9SFKwO3kyXegyjDPJuNstKc3-FsFM1Ef26uO18fumz9iHcH_ObFMkqaRiVM1vg9HqA',
        },
    },
    'request': {
        'type': 'IntentRequest',
        'requestId': 'amzn1.echo-api.request.79e818fc-7112-4629-8ec0-7e858bc271ad',
        'locale': 'de-DE',
        'timestamp': '2023-02-10T00:10:20Z',
        'intent': {
            'name': 'AddStationIntent',
            'confirmationStatus': 'NONE',
            'slots': {
                'adresse': {
                    'name': 'adresse',
                    'value': 'kurmainz kaserne',
                    'confirmationStatus': 'NONE',
                    'source': 'USER',
                },
                'bekannterOrt': {
                    'name': 'bekannterOrt',
                    'value': 'home',
                    'resolutions': {
                        'resolutionsPerAuthority': [
                            {
                                'authority': 'amzn1.er-authority.echo-sdk.amzn1.ask.skill.89f9587f-84f1-4005-9478-f0844a5221f1.BekannteOrte',
                                'status': {
                                    'code': 'ER_SUCCESS_NO_MATCH',
                                },
                            },
                        ],
                    },
                    'confirmationStatus': 'CONFIRMED',
                    'source': 'USER',
                },
                'ListChoice': {
                    'name': 'ListChoice',
                    'confirmationStatus': 'NONE',
                    'source': 'USER',
                },
            },
        },
        'dialogState': 'COMPLETED',
    },
});

try {
    await skill.invoke(ding.requestEnvelope, undefined);

} catch (e) {
    console.log(e);
}
