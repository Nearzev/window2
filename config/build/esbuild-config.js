const ESBuild = require('esbuild');
const path = require('path');

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd =  mode === 'production';

ESBuild.build({
    outdir: path.resolve(__dirname, '..', '..', 'dist'),
    entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'js', 'main.js')],
    entryNames: 'bundle',
    bundle: true,
    minify: isProd,
})