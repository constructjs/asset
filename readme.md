# Construct: Asset

An extension for [Construct.js](http://github.com/makesites/construct) to support asset.json for streamlining asset delivery.


## Install

Using bower:
```
bower install construct.asset
```

## Usage

The most common use of this library is through its custom element, named ```construct-asset```:
```
<construct-asset src="...">
or
<asset is="construct-asset" src="...">
```

The library can also be loaded manually by including "build/construct.aseet.js" in your webpage.

Configure the format(s) of the assets to be supported:
```
construct.asset(["obj"]);
```
Then use the relevant methods in the Main3D view...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Released at [Makesites.org](http://makesites.org)

Distributed under the [MIT license](http://makesites.org/licenses/MIT)

