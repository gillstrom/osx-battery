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
		sn: 'C01XXX04DPF9CRA8',
		manufacter: 'DP',
		name: 'bq2Xz451',
		packLotCode: '0',
		PCB: '0',
		firmware: '702',
		hardwareRevision: '1',
		cellRevision: '1206',
		mAhRemaining: '2682',
		charged: 'No',
		charging: 'No',
		mAhCapacity: '8486',
		cycles: '38',
		condition: 'Normal',
		installed: 'Yes',
		amperage: '−1566',
		voltage: '11203' 
	}
	*/
});
```


## CLI

```
$ npm install --global osx-battery
```

```
$ osx-battery --help

  Usage
    $ osx-battery
```


## Related

* [battery-level](https://github.com/gillstrom/battery-level) - Get current battery level


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
