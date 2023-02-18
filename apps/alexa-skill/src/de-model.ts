export const deModel = {
    'interactionModel': {
        'languageModel': {
            'invocationName': 'fahr mich',
            'intents': [{ 'name': 'AMAZON.CancelIntent', 'samples': [] }, {
                'name': 'AMAZON.HelpIntent',
                'samples': [],
            }, { 'name': 'AMAZON.StopIntent', 'samples': [] }, {
                'name': 'AMAZON.NavigateHomeIntent',
                'samples': [],
            }, { 'name': 'AMAZON.FallbackIntent', 'samples': [] }, {
                'name': 'GoToOrt',
                'slots': [{ 'name': 'ort', 'type': 'BekannteOrte' }],
                'samples': ['zum {ort}', 'zu {ort}', 'nach {ort}', 'zur {ort}'],
            }, {
                'name': 'AddStationIntent',
                'slots': [{
                    'name': 'haltestelle',
                    'type': 'Haltestelle',
                    'samples': ['Die haltestelle lautet {haltestelle}', '{haltestelle}'],
                }, {
                    'name': 'bekannterOrt',
                    'type': 'BekannteOrte',
                    'samples': ['{bekannterOrt}', 'Der ort soll {bekannterOrt} heisen.'],
                }, {
                    'name': 'listChoice',
                    'type': 'AMAZON.NUMBER',
                    'samples': ['die {listChoice} wahl', '{listChoice}', 'das {listChoice} vorschlag', 'die {listChoice} vorschlag', 'der {listChoice} vorschalg'],
                }],
                'samples': ['Merke dir einen Neunen Ort', 'Speichere einen Neuen Ort'],
            }],
            'types': [{
                'values': [{
                    'name': {
                        'value': 'Zuhause',
                        'synonyms': ['home'],
                    },
                }, { 'name': { 'value': 'Arbeit', 'synonyms': ['job'] } }, {
                    'name': {
                        'value': 'Uni',
                        'synonyms': ['Universität'],
                    },
                }], 'name': 'BekannteOrte',
            }, {
                'values': [{ 'name': { 'value': 'Römisches Theater Bahnhof' } }, { 'name': { 'value': 'Hauptbahnhof' } }, { 'name': { 'value': 'Nordbahnhof' } }, { 'name': { 'value': 'Mainz-Mombach Bahnhof' } }, { 'name': { 'value': 'Bahnhof' } }, { 'name': { 'value': 'Mainz-Gonsenheim Bf' } }, { 'name': { 'value': 'Waggonfabrik' } }, { 'name': { 'value': 'Marienborn Bahnhof' } }, { 'name': { 'value': 'Universitätsmedizin' } }, { 'name': { 'value': 'Fichteplatz' } }, { 'name': { 'value': 'St. Bernhard' } }, { 'name': { 'value': 'Schusterstraße' } }, { 'name': { 'value': 'Hindenburgplatz/Architektenk.' } }, { 'name': { 'value': 'Brückenplatz' } }, { 'name': { 'value': 'Barcelona-Allee' } }, { 'name': { 'value': 'Möbel Martin' } }, { 'name': { 'value': 'Kurmainz Kaserne' } }, { 'name': { 'value': 'Jägerhaus' } }, { 'name': { 'value': 'Birkenstraße' } }, { 'name': { 'value': 'Mühldreieck P+R' } }, { 'name': { 'value': 'Heuerstraße' } }, { 'name': { 'value': 'Energiepark/Messe' } }, { 'name': { 'value': 'Fischtor/Antenne Mainz' } }, { 'name': { 'value': 'Stadtpark' } }, { 'name': { 'value': 'Zur alten Portland' } }, { 'name': { 'value': 'Forsthaus' } }, { 'name': { 'value': 'Bauhofstraße/Landesmuseum' } }, { 'name': { 'value': 'Hbf West/Mz Taubertsbergbad' } }, { 'name': { 'value': 'Friedrich-von-Pfeiffer-Weg' } }, { 'name': { 'value': 'Hindemithstraße' } }, { 'name': { 'value': 'Gutenberg Center Nord' } }, { 'name': { 'value': 'Lortzingstraße' } }, { 'name': { 'value': 'Münsterplatz' } }, { 'name': { 'value': 'Kaisertor/Stadtbibliothek' } }, { 'name': { 'value': 'Neubrunnenplatz/Römerpassage' } }, { 'name': { 'value': 'Mombacher Kreisel' } }, { 'name': { 'value': 'Landtag' } }, { 'name': { 'value': 'Universität' } }, { 'name': { 'value': 'Vor der Frecht' } }, { 'name': { 'value': 'Medienberg' } }, { 'name': { 'value': 'King-Park-Center/Bruchwegst.' } }, { 'name': { 'value': 'Schott Forschungszentrum' } }, { 'name': { 'value': 'Kardinal-v.-Galen Straße' } }, { 'name': { 'value': 'Gutenberg Center' } }, { 'name': { 'value': 'Roter Weg' } }, { 'name': { 'value': 'Alte Ziegelei' } }, { 'name': { 'value': 'Am Judensand' } }, { 'name': { 'value': 'Draiser Weg' } }, { 'name': { 'value': 'Alte Waggonfabrik' } }, { 'name': { 'value': 'An der Hasenquelle' } }, { 'name': { 'value': 'Hebbelstraße' } }, { 'name': { 'value': 'Bürgerhaus' } }, { 'name': { 'value': 'Alfred-Mumbächer Straße' } }, { 'name': { 'value': 'Richard-Schirrmann-Straße' } }, { 'name': { 'value': 'Bleichstraße' } }, { 'name': { 'value': 'Laubenheimer Straße' } }, { 'name': { 'value': 'Hohlstraße' } }, { 'name': { 'value': 'Universitätsmedizin Süd' } }, { 'name': { 'value': 'Eisgrubweg' } }, { 'name': { 'value': 'An der Oberbrücke' } }, { 'name': { 'value': 'Kaufland Mainz' } }, { 'name': { 'value': 'Peter-Härtling-Schule' } }, { 'name': { 'value': 'Botanischer Garten' } }, { 'name': { 'value': 'Obsthöfe Finthen' } }, { 'name': { 'value': 'Marktplatz Laubenheim' } }, { 'name': { 'value': 'Canisiusstraße' } }, { 'name': { 'value': 'Kisselberg' } }, { 'name': { 'value': 'Krongarten' } }, { 'name': { 'value': 'MVG-Betriebshof' } }, { 'name': { 'value': 'Gutenberg Center Ost' } }, { 'name': { 'value': 'Messe Ost' } }, { 'name': { 'value': 'Heßlerweg' } }, { 'name': { 'value': 'Staudingerweg' } }, { 'name': { 'value': 'Duesbergweg' } }, { 'name': { 'value': 'Robert-Bosch-Straße' } }, { 'name': { 'value': 'Brezelbäckerei Ditsch' } }, { 'name': { 'value': 'Messe' } }, { 'name': { 'value': 'Am Finther Wald' } }, { 'name': { 'value': 'Theodor-Heuss-Straße' } }, { 'name': { 'value': 'Atrium Hotel Mainz' } }, { 'name': { 'value': 'Markthalle' } }, { 'name': { 'value': 'Katzenberg' } }, { 'name': { 'value': 'SWR Südwestrundfunk' } }, { 'name': { 'value': 'Ketteler-Kolleg' } }, { 'name': { 'value': 'Eduard-David-Straße' } }, { 'name': { 'value': 'Hartenbergpark' } }, { 'name': { 'value': 'An der Dreispitz' } }, { 'name': { 'value': 'Kantstraße' } }, { 'name': { 'value': 'Hegelstraße' } }, { 'name': { 'value': 'Münchfeld' } }, { 'name': { 'value': 'Am Jugendwerk' } }, { 'name': { 'value': 'An der Nonnenwiese' } }, { 'name': { 'value': 'Mainzer Straße/Gonsberg Campus' } }, { 'name': { 'value': 'Rathaus Gonsenheim' } }, { 'name': { 'value': 'Kapellenstr/Gesundheitszentrum' } }, { 'name': { 'value': 'Theodor-Körner-Straße' } }, { 'name': { 'value': 'Lennebergplatz' } }, { 'name': { 'value': 'Draiser Straße' } }, { 'name': { 'value': 'Martin-Kirchner-Straße' } }, { 'name': { 'value': 'Ludwig-Nauth-Straße' } }, { 'name': { 'value': 'Karl-Zörgiebel-Straße' } }, { 'name': { 'value': 'Albert-Stohr-Straße/IGS' } }, { 'name': { 'value': 'Hinkelsteinerstraße' } }, { 'name': { 'value': 'Südring' } }, { 'name': { 'value': 'Wilhelm-Quetsch-Straße' } }, { 'name': { 'value': 'Gutenberg-Center Süd' } }, { 'name': { 'value': 'Im Borner Grund' } }, { 'name': { 'value': 'Pfarrer-Dorn-Straße' } }, { 'name': { 'value': 'Am Sonnigen Hang' } }, { 'name': { 'value': 'Am Sportfeld/Fahrschule Zöll' } }, { 'name': { 'value': 'Wildpark' } }, { 'name': { 'value': 'Elsa-Brändström-Straße' } }, { 'name': { 'value': 'An der Krimm' } }, { 'name': { 'value': 'Obere Kreuzstraße' } }, { 'name': { 'value': 'Turmstraße' } }, { 'name': { 'value': 'Rheingoldhalle/Rathaus' } }, { 'name': { 'value': 'Backhaushohl' } }, { 'name': { 'value': 'Trajanstraße' } }, { 'name': { 'value': 'Wallaustraße' } }, { 'name': { 'value': 'Höfchen/Listmann' } }, { 'name': { 'value': 'Schillerplatz' } }, { 'name': { 'value': 'Daniel-Brendel-Straße' } }, { 'name': { 'value': 'Drais/Friedhof' } }, { 'name': { 'value': 'Curt-Goetz-Straße' } }, { 'name': { 'value': 'Ober Olmer Straße' } }, { 'name': { 'value': 'Menzelstraße' } }, { 'name': { 'value': 'Industriehafen Süd' } }, { 'name': { 'value': 'ZDF - 2. Deutsches Fernsehen' } }, { 'name': { 'value': 'Kurfürstenstraße' } }, { 'name': { 'value': 'Synagogenplatz' } }, { 'name': { 'value': 'Sömmerringstraße' } }, { 'name': { 'value': 'Goetheplatz' } }, { 'name': { 'value': 'Lessingstraße' } }, { 'name': { 'value': 'Goethestraße' } }, { 'name': { 'value': 'Bismarckplatz' } }, { 'name': { 'value': 'Schott AG' } }, { 'name': { 'value': 'Zwerchallee' } }, { 'name': { 'value': 'Eintrachthalle' } }, { 'name': { 'value': 'Ortsverwaltung Mombach' } }, { 'name': { 'value': 'Am Schwermer' } }, { 'name': { 'value': 'Am Lemmchen' } }, { 'name': { 'value': 'Waldfriedhof' } }, { 'name': { 'value': 'An den Dünen' } }, { 'name': { 'value': 'Auf der Langen Lein' } }, { 'name': { 'value': 'Westring' } }, { 'name': { 'value': 'Am Polygon' } }, { 'name': { 'value': 'Feldbergplatz/Mz Stadtwerke' } }, { 'name': { 'value': 'Mainstr./Bewegungszentrum' } }, { 'name': { 'value': 'Straßenbahnamt/LBBW' } }, { 'name': { 'value': 'Schott Ceran-Center' } }, { 'name': { 'value': 'Quellwiese' } }, { 'name': { 'value': 'Ingelheimer Aue' } }, { 'name': { 'value': 'Obere Zahlbacher Straße' } }, { 'name': { 'value': 'Landwehrweg' } }, { 'name': { 'value': 'An der Philippsschanze' } }, { 'name': { 'value': 'Marienhaus Klinikum' } }, { 'name': { 'value': 'Jägerstraße' } }, { 'name': { 'value': 'Hechtsheimer Straße' } }, { 'name': { 'value': 'Rosengarten' } }, { 'name': { 'value': 'Volkspark' } }, { 'name': { 'value': 'Am Viktorstift/DJH' } }, { 'name': { 'value': 'Alter Friedhof' } }, { 'name': { 'value': 'Paul-Gerhardt-Weg' } }, { 'name': { 'value': 'Pfaffengasse' } }, { 'name': { 'value': 'Altstadt/Holzhof' } }, { 'name': { 'value': 'Ritterstraße' } }, { 'name': { 'value': 'Bodelschwinghstraße' } }, { 'name': { 'value': 'Martin-Luther-Straße' } }, { 'name': { 'value': 'Heiligkreuzweg/Löhr Automeile' } }, { 'name': { 'value': 'Weisenauer Weg' } }, { 'name': { 'value': 'Frankenhöhe' } }, { 'name': { 'value': 'Bauhaus/Am Großberg' } }, { 'name': { 'value': 'Scheck-In-Center' } }, { 'name': { 'value': 'Friedrich-Ebert-Straße' } }, { 'name': { 'value': 'Wilhelm-Th.-Römheld-Straße' } }, { 'name': { 'value': 'Holzturm/Malakoff-Passage' } }, { 'name': { 'value': 'Favorite Parkhotel' } }, { 'name': { 'value': 'Sauerwiese' } }, { 'name': { 'value': 'Weisenauer Synagoge' } }, { 'name': { 'value': 'Wormser Straße' } }, { 'name': { 'value': 'Riedweg' } }, { 'name': { 'value': 'Schubertstraße' } }, { 'name': { 'value': 'Neuweg' } }, { 'name': { 'value': 'Rüsselsheimer Allee' } }, { 'name': { 'value': 'Ludwig-Marx-Straße' } }, { 'name': { 'value': 'An der Klosterheck' } }, { 'name': { 'value': 'Hans-Zöller-Straße' } }, { 'name': { 'value': 'Marienhof' } }, { 'name': { 'value': 'Oppenheimer Straße' } }, { 'name': { 'value': 'Ärztehaus Laubenheim' } }, { 'name': { 'value': 'Wiesenstraße' } }, { 'name': { 'value': 'Berliner Straße' } }, { 'name': { 'value': 'Carl-Zeiss-Straße' } }, { 'name': { 'value': 'Am Schinnergraben' } }, { 'name': { 'value': 'Ebersheim/Abzweigungen' } }, { 'name': { 'value': 'Töngeshof' } }, { 'name': { 'value': 'Fritz-Erler-Straße' } }, { 'name': { 'value': 'Neugasse' } }, { 'name': { 'value': 'Zornheimer Straße' } }, { 'name': { 'value': 'Hanns-Dieter-Hüsch-Weg' } }, { 'name': { 'value': 'Colonel-Kleinmann-Weg' } }, { 'name': { 'value': 'Johannes-von-Müller-Weg' } }, { 'name': { 'value': 'Jakob-Heinz-Straße/Arena' } }, { 'name': { 'value': 'In der Dalheimer Wiese' } }, { 'name': { 'value': 'Alte Lokhalle' } }, { 'name': { 'value': 'VRM' } }, { 'name': { 'value': 'An der Bruchspitze/Impfzentrum' } }, { 'name': { 'value': 'Elbestraße' } }, { 'name': { 'value': 'Hildegard-von-Bingen-Str.' } }, { 'name': { 'value': 'Bezirksfriedhof West' } }, { 'name': { 'value': 'Bereitschaftspolizei' } }, { 'name': { 'value': 'Johannes-Kepler-Straße' } }, { 'name': { 'value': 'Wilh.-Maybach-Straße' } }, { 'name': { 'value': 'Werners Backstube' } }, { 'name': { 'value': 'Mathias-Kerz-Straße' } }, { 'name': { 'value': 'Am Bornberg' } }, { 'name': { 'value': 'Ernst-Reuter-Straße' } }, { 'name': { 'value': 'Wallstraße' } }, { 'name': { 'value': 'Gonsenheimer Tor' } }, { 'name': { 'value': 'Berufsschulzentrum' } }, { 'name': { 'value': 'Mombacher Tor' } }, { 'name': { 'value': 'Goetheunterführung' } }, { 'name': { 'value': 'Gonsbachgärten' } }, { 'name': { 'value': 'Fritz-Kohl-Straße' } }, { 'name': { 'value': 'Ludwigsburger Straße' } }, { 'name': { 'value': 'Schulzentrum' } }, { 'name': { 'value': 'Abzw. Waldfriedhof' } }, { 'name': { 'value': 'Hochschule Mainz' } }, { 'name': { 'value': 'Ginsheimer Straße' } }, { 'name': { 'value': 'Dijonstraße' } }, { 'name': { 'value': 'Pariser Tor' } }, { 'name': { 'value': 'Hans-Böckler-St/Die Johanniter' } }, { 'name': { 'value': 'Neubrunnenstraße' } }, { 'name': { 'value': 'Poststraße' } }, { 'name': { 'value': 'Messe Süd' } }, { 'name': { 'value': 'Baentschstraße' } }, { 'name': { 'value': 'Zitadellenweg/Bf. Röm. Th.' } }, { 'name': { 'value': 'Zentralmensa' } }, { 'name': { 'value': 'Agentur für Arbeit/Kath.Hochs' } }, { 'name': { 'value': 'Schillerschule' } }, { 'name': { 'value': 'Sertoriusring Nord' } }, { 'name': { 'value': 'Jupiterweg' } }, { 'name': { 'value': 'Römerquelle' } }, { 'name': { 'value': 'Am Hessendenkmal' } }, { 'name': { 'value': 'Layenhof' } }, { 'name': { 'value': 'Katzenberg/Nelkenweg' } }, { 'name': { 'value': 'Am Eiskeller' } }, { 'name': { 'value': 'Huttenstraße' } }, { 'name': { 'value': 'Borngasse' } }, { 'name': { 'value': 'Kirchgasse' } }, { 'name': { 'value': 'Kettelerstraße' } }, { 'name': { 'value': 'Rodeneckplatz' } }, { 'name': { 'value': 'Königsborn' } }, { 'name': { 'value': 'Layenhöfer Chaussee' } }, { 'name': { 'value': 'Koblenzer Str./HDI-Gerling' } }, { 'name': { 'value': 'Büdinger Straße' } }, { 'name': { 'value': 'Am Gautor' } }, { 'name': { 'value': 'Hugo-Eckener-Straße' } }, { 'name': { 'value': 'Nerotalstraße' } }, { 'name': { 'value': 'Viermorgenweg' } }, { 'name': { 'value': 'Gemarkungsgrenze' } }, { 'name': { 'value': 'Dornsheimer Weg' } }, { 'name': { 'value': 'Josef-Ludwig-Platz' } }, { 'name': { 'value': 'Bahnstraße' } }, { 'name': { 'value': 'Naturschaugarten Lindenmühle' } }, { 'name': { 'value': 'Zahlbach' } }, { 'name': { 'value': 'Römersteine' } }, { 'name': { 'value': 'Hauptfriedhof/Blindenzentrum' } }, { 'name': { 'value': 'Zollhafen/Inge-Reitz-Str' } }, { 'name': { 'value': 'Erich-Koch-Höhenweg' } }, { 'name': { 'value': 'Karlsstraße' } }, { 'name': { 'value': 'Hofgut Laubenheimer Höhe' } }, { 'name': { 'value': 'Waldthausenstraße' } }, { 'name': { 'value': 'Hahn-Meitner-Weg' } }, { 'name': { 'value': 'Hochschule Mainz/Campusbrücke' } }, { 'name': { 'value': 'Am Sägewerk' } }, { 'name': { 'value': 'Am Gonsenheimer Wald' } }, { 'name': { 'value': 'Isaac-Fulda-Allee/Koblenzerstr' } }, { 'name': { 'value': 'Wirtschaftsbetrieb' } }, { 'name': { 'value': 'Unterführung Heimstraße' } }, { 'name': { 'value': 'Liebigstraße' } }, { 'name': { 'value': 'Nestlestraße' } }, { 'name': { 'value': 'Sommerflor' } }, { 'name': { 'value': 'Chana-Khan-Straße' } }, { 'name': { 'value': 'TSV Schott Mainz' } }, { 'name': { 'value': 'Werrastraße' } }, { 'name': { 'value': 'Tierheim Mainz' } }, { 'name': { 'value': 'Senefelderstraße' } }, { 'name': { 'value': 'Große Langgasse' } }, { 'name': { 'value': 'Gymnasium Mainz-Oberstadt   ' } }, { 'name': { 'value': 'Galileo-Gelilei-Straße' } }, { 'name': { 'value': 'Elly-Beinhorn-Straße' } }],
                'name': 'Haltestelle',
            }],
        },
        'dialog': {
            'intents': [{
                'name': 'AddStationIntent',
                'confirmationRequired': false,
                'prompts': {},
                'slots': [{
                    'name': 'haltestelle',
                    'type': 'Haltestelle',
                    'elicitationRequired': true,
                    'confirmationRequired': false,
                    'prompts': { 'elicitation': 'Elicit.Slot.206116147410.483422192679' },
                }, {
                    'name': 'bekannterOrt',
                    'type': 'BekannteOrte',
                    'elicitationRequired': true,
                    'confirmationRequired': true,
                    'prompts': {
                        'confirmation': 'Confirm.Slot.206116147410.876656949550',
                        'elicitation': 'Elicit.Slot.206116147410.876656949550',
                    },
                }, {
                    'name': 'listChoice',
                    'type': 'AMAZON.NUMBER',
                    'elicitationRequired': false,
                    'confirmationRequired': false,
                    'prompts': {},
                    'validations': [{
                        'type': 'isGreaterThan',
                        'prompt': 'Slot.Validation.206116147410.199805348541.87145184706',
                        'value': '0',
                    }, {
                        'type': 'isLessThan',
                        'prompt': 'Slot.Validation.206116147410.199805348541.1110212648416',
                        'value': '6',
                    }],
                }],
                'delegationStrategy': 'SKILL_RESPONSE',
            }, {
                'name': 'GoToOrt',
                'confirmationRequired': false,
                'prompts': {},
                'slots': [{
                    'name': 'ort',
                    'type': 'BekannteOrte',
                    'elicitationRequired': false,
                    'confirmationRequired': false,
                    'prompts': {},
                }],
            }], 'delegationStrategy': 'ALWAYS',
        },
        'prompts': [{
            'id': 'Elicit.Slot.206116147410.876656949550',
            'variations': [{ 'type': 'PlainText', 'value': 'Wie soll der Ort heißen?' }],
        }, {
            'id': 'Confirm.Slot.206116147410.876656949550',
            'variations': [{ 'type': 'PlainText', 'value': 'Habe ich {bekannterOrt} richtig verstanden?' }],
        }, {
            'id': 'Elicit.Slot.206116147410.483422192679',
            'variations': [{ 'type': 'PlainText', 'value': 'Wie lautet die {haltestelle} ?' }],
        }, {
            'id': 'Slot.Validation.206116147410.199805348541.87145184706',
            'variations': [{ 'type': 'PlainText', 'value': 'Die Zahl muss groser als null sein.' }],
        }, {
            'id': 'Slot.Validation.206116147410.199805348541.1110212648416',
            'variations': [{ 'type': 'PlainText', 'value': 'Die Zahl muss kleiner als sechs sein.' }],
        }, {
            'id': 'Elicit.Slot.727577466108.1069117045784',
            'variations': [{ 'type': 'PlainText', 'value': 'Wahle den Besten vorschalg zwischen eins und funf.' }],
        }],
    }, 'version': '25',
} as const;
