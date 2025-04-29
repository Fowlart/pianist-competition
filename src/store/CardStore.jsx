import {createStore} from 'redux'
import {archive} from "./Archive";
import {fortepianoSolo} from "./FortepianoSolo";
import {ensembles} from "./Ensemble";
import {additionalInstruments} from "./AdditionalInstruments";
import {concertmasters} from "./Concertmasters";

const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація «Фортепіанний ансамбль»`;
const group3 = `Номінація «Додатковий інструмент (фортепіано)»`;
const group4 = `Номінація «Концертмейстер»`;

let myCards = archive;
myCards = myCards.concat(fortepianoSolo).concat(ensembles).concat(additionalInstruments).concat(concertmasters)

/** CODE **/
function filmReducer(state = {cardCount: myCards.length, cards: myCards, isDataInPlace: true, error: ""}, action) {
    switch (action.type) {
        case 'RFS_PAGE':
            return {
                cardCount: -2,
                cards: [],
                isDataInPlace: false,
                error: ""
            };
        case 'INFO_PAGE':
            return {
                cardCount: -1,
                cards: [],
                isDataInPlace: false,
                error: ""
            };
        case 'ARCHIVE':
            console.log("> Архів");
            let archiveCards = myCards.filter(card => card.group === "архів").slice();
            return {
                cards: archiveCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error: ""
            };
        case 'ALL':
            console.log("> Усі відео");
            return {
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error: ""
            };
        case 'group-1':
            let newCards = myCards.filter(card => card.group === group1).slice();
            return {
                cards: newCards,
                isDataInPlace: true,
                cardCount: newCards.length,
                error: ""
            }
        case 'group-2':
            let newCards1 = myCards.filter(card => card.group === group2).slice();
            return {
                cards: newCards1,
                isDataInPlace: true,
                cardCount: newCards1.length,
                error: ""
            }
        case 'group-3':
            let newCards2 = myCards.filter(card => card.group === group3).slice();
            return {
                cards: newCards2,
                isDataInPlace: true,
                cardCount: newCards2.length,
                error: "",
            }
        case 'group-4':
            let newCards4 = myCards.filter(card => card.group === group4).slice();
            return {
                cards: newCards4,
                isDataInPlace: true,
                cardCount: newCards4.length,
                error: "",
            }
        case 'SEARCH':
            let q = action.query.toLowerCase().trim();
            console.log(`> Пошук: ${q}`);
            let newCards3 = myCards.filter(card => {
                let cardName = card.name.toLowerCase().trim();
                let bool = (cardName.startsWith(q) || cardName.includes(q));
                console.log(`Testing ${cardName} on query ${q}, result is ${bool}`)
                return bool;
            });
            return {
                ...state,
                cards: newCards3,
                isDataInPlace: true,
                cardCount: newCards3.length,
                error: ""
            }
        case 'ERROR':
            console.log(`> Помилка`);
            return {
                error: action.msg,
                cardCount: 1,
                cards: [],
                isDataInPlace: true,
            }
        default:
            return {
                cards: concertmasters,
                isDataInPlace: true,
                cardCount: concertmasters.length,
                error: ""
            }
    }
}

export const cardStore = createStore(filmReducer);

cardStore.subscribe(() =>
    console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount)
);





