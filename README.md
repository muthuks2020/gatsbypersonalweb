# muthu.me

GatsbyJS starter for a personal website.
https://blissful-ptolemy-983f31.netlify.com/

## Development

1. Install [NVM](https://github.com/creationix/nvm).
2. Install Node.js 10.11.0 (if you haven't installed it yet): `nvm install 10.11.0`.
3. Run `nvm use` to use Node.js 10.11.0 (as defined in `.nvmrc`).
4. Install project dependencies: `npm install`.
5. Run `gatsby develop` and access http://localhost:8000.

## Usage

Setup a GatsbyJS site and use this as a starter:

```shell
$ gatsby new gatsby-site https://github.com/muthuks2020/gatsbypersonalweb
```


### gatsby-plugin-manifest options

This plugin is responsible for generating a [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and different icon versions going to be used as a favicon and home icon (for mobile phones).

All of the `options` for this plugin can be changed. It has some default values which is enough to start. It's recommended to change the following options:

- `name`
- `short_name`

If you want to change the icon, just replace the image in `src/images/icon.png`.
