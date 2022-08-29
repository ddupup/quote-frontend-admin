const withAntdLess = require('next-plugin-antd-less');

const isProd = process.env.NODE_ENV === 'production';


module.exports = withAntdLess({
    basePath: '/quote/admin',
    assetPrefix: isProd ? '/quote/admin' : '',
    modifyVars: {'@primary-color': '#69b1f4'},
    lessVarsFilePath: './styles/variables.less',
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: '[hash:base64:8]',
        exportLocalsConvention: 'camelCase',
        exportOnlyLocals: false,

        getLocalIdent: (context, localIdentName, localName, options) => {
            return 'whatever_random_class_name';
        },
    },

    nextjs: {
        localIdentNameFollowDev: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/article',
                permanent: true,
            },
        ];
    },
});
