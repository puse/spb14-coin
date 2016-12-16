let Device = require('spb14-device');

class Coin extends Device {
    next (index, bias) {
        let cursor = Number(this.urv > bias);

        let val = index[cursor];

        if (val instanceof Device)
            val = val.get();

        return super.next(val);
    }

    init (table) {
        let keys = [...table.keys()];

        let ratio = String(table) == '[object Map]' // bad
                ? [...table.values()]
                : [1, 1];

        let bias = ratio[0]
                / (ratio[0] + ratio[1]);

        return super.init(keys, bias);
    }
}

module.exports = Coin;
