module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './assets',
          '@store': './src/store',
          '@env': './env.ts',
          '@hooks': './src/hooks',
          '@components': './src/components',
        },
      },
    ],
  ],
};
