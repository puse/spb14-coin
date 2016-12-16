# Coin

Biased coin simulator

### Example

~~~js
const Coin = require('spb14-coin');

let config = new Map([
        ['Exo'  , 40],
        ['Hopar', 60]
    ]);

let coin = new Coin(config);

die.get().then(console.log); // more likely 'Hopar'
~~~


## Install

~~~sh
npm install spb14-coin
~~~


### License

MIT License
