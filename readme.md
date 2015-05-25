# osx-battery [![Build Status](https://travis-ci.org/gillstrom/osx-battery.svg?branch=master)](https://travis-ci.org/gillstrom/osx-battery)

> Get information about your Battery


## Install

```
$ npm install --save osx-battery
```


## Usage

```js
var osxBattery = require('osx-battery');

osxBattery(function (err, res) {
	console.log(res);
	/*
	{ 
		AdapterInfo: 0,
		Amperage: 0,
		AvgTimeToEmpty: 65535,
		AvgTimeToFull: 65535,
		BatteryInstalled: true,
		BatteryInvalidWakeSeconds: 30,
		BatterySerialNumber: 'C01447304DPF9CRA8',
		BootPathUpdated: 1431448419,
		CellVoltage: [ 4262, 4262, 4262, 0 ],
		CurrentCapacity: 8424,
		CycleCount: 39,
		DesignCapacity: 8440,
		...
	}
	*/
});
```


## Related

* [battery-level](https://github.com/gillstrom/battery-level) - Get current battery level


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
