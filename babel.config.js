module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'], // Or metro-react-native-babel-preset if not using Expo
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: false }],
            ['@babel/plugin-proposal-private-methods', { loose: false }],
            ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
            ['module:react-native-dotenv', {
                moduleName: "@env",
                path: ".env",
                allowUndefined: true
            }]
        ],
    };
};
