import test from 'ava';

import Coin from '..';

test.beforeEach(t => {
    t.context.exo   = 0;
    t.context.hopar = 0;
});

test('Produce less `exo`s', async t => {
    let map = new Map([
            ['exo'  , 2],
            ['hopar', 3]
        ]);

    let coin = new Coin(map);

    (await times(coin)(1000))
        .forEach(count(t.context));

    t.true(t.context.exo < t.context.hopar);
});


test('Behave fair', async t => {
    let set = new Set(['exo', 'hopar']);

    let coin = new Coin(set);

    (await times(coin)(1000))
        .forEach(count(t.context));

    t.true(t.context.exo   > 400);
    t.true(t.context.hopar > 400);
});


let count = stat => i => stat[i]++;

let times = coin => n => {
        let promises = [], p,
            i = 0;

        for (p of coin)
            if (i++ < 1000)
                promises.push(p);
            else
                break;

        return Promise.all(promises);
    };

