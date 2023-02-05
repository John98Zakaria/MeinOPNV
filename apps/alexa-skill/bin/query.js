import { createClient } from 'hafas-client';
import { profile } from 'hafas-client/p/db/index.js';
import * as fs from 'fs';
import { prisma } from '../src/external-clients.js';
const client = createClient(profile, 'hafas-client-example');
const locations = await client.locations('Generalüberspekstraße mainz', { fuzzy: true, subStops: true, stops: true });
console.log(locations);
// const travel = await client.journeys({ type: 'location', longitude: 10, latitude: 20 }, 'asd', undefined);
const kurmainKaserne = '000405243';
const mainzGonsenheim = '008000068';
const journey = await client.journeys(kurmainKaserne, mainzGonsenheim, { results: 2 });
const sameDing = await client.refreshJourney(`T$A=1@O=Oberstadt Kurmainz Kaserne, Mainz@L=405243@a=128@$A=1@O=Hauptbahnhof, Mainz@L=518921@a=128@$202302032330$202302032342$STR   52$$1$$$$$$§W$A=1@O=Hauptbahnhof, Mainz@L=518921@a=128@$A=1@O=Mainz Hbf@L=8000240@a=128@$202302032342$202302032347$$$1$$$$$$§T$A=1@O=Mainz Hbf@L=8000240@a=128@$A=1@O=Darmstadt Hbf@L=8000068@a=128@$202302032349$202302040021$HLB28741$$1$$$$$$`, undefined);
console.log(await client.trip('1|525483|1|80|3022023', undefined));
fs.writeFileSync('journey.json', JSON.stringify(journey, null, 2));
await prisma.user.create({
    data: {
        alexaUserId: Math.random().toString(),
        alexaDevices: [],
        userLocations: [],
        userStations: []
    }
});
console.log('OOK');
//# sourceMappingURL=query.js.map