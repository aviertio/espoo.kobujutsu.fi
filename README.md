# espoo.kobujutsu.fi

Web site for "Espoon Yuishinkai ry", a martial club in Espoo, Finland.

The web site is available at `espoo.kobujutsu.fi`, in which it is deployed immediately when something is pushed to this GitHub repository.
The web site is hosted at [Netlify](https://www.netlify.com/), for free since creating open source stuff is great.

Service Worker could be used for caching assets, but need to focus on it...

Note that I had to play with [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity):

```sh
shasum -a 256 public/assets/default.css | xxd -r -p | base64
```

CSS should be passed through [online Autoprefixer at `autoprefixer.github.io`](https://autoprefixer.github.io/).
Using there the option `"last 4 version"`.

## Testing with CrossBrowserTesting

They offer a free version for Open Source...

## Testing with sitespeed.io

Install [the `sitespeed.io`](https://www.sitespeed.io/documentation/sitespeed.io/) command line tool via [`npm`, that comes with Node.js](https://nodejs.org/en/download/):

```sh
[sudo] npm install --global sitespeed.io
```

Execute:

```sh
sitespeed.io https://espoo.kobujutsu.fi
```

Results will appear in the folder `site
speed-results/espoo.kobujutsu.fi/`.

## Testing with sonar

Install [the `sonar`](https://sonarwhal.com/) command line tool via [`npm`, that comes with Node.js](https://nodejs.org/en/download/):

```sh
[sudo] npm install --global @sonarwhal/sonar
```

The configuration for it is already available in the file called `.sonarrc` and used via:

```sh
sonar https://espoo.kobujutsu.fi
```

## License

Licensed under [the MIT license](LICENSE).
