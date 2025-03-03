const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/script.js', // Point d'entrée de votre application
    output: {
        filename: 'bundle.js', // Nom du fichier de sortie
        path: path.resolve(__dirname, 'dist'), // Répertoire de sortie
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Règle pour les fichiers CSS
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Modèle HTML à utiliser
        }),
    ],
    devServer: {
        static: './dist', // Répertoire à servir
    },
    mode: 'development', // Ajoutez cette ligne pour définir le mode
};
