// webpack.js.org is websit where you can get help from
// entry -> output
//path is where the file is located
//__dirname is which give the current location of directory
const webpack = require('webpack');
const path = require('path'); // we added node module path, which is used to join two paths
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE.ENV = process.env.NODE.ENV || 'development';

if(process.env.NODE.ENV === 'test'){
require('dotenv').config({path:'.env.test'});
}else if (process.env.NODE.ENV === 'development'){
    require('dotenv').config({path:'.env.development'});

}


module.exports = (env) =>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return{
        entry: './src/app.js',  // we set this entry point so that webpack can know where to start from
        output:{
            path: path.join(__dirname,'public', 'dist'),
            filename:'bundle.js'
        },
        module:{
            //module rules lets us set how we want to run our loader
            rules:[{
                loader: 'babel-loader', //it will load babel loader
                test: /\.js$/, // which files we want to test
                exclude: /node_modules/ // we dont want to include node modules
            },
            {
                test: /\.s?css$/,  // ? makes optional for both css and scss
                use:CSSExtract.extract({
                    use: [
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                }) // use takes an array of loaders
                    
            }]
        },
        plugins:[
        CSSExtract,
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
            'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),

        })
        ],
        devtool: isProduction ? 'source-map' :'inline-source-map', // these are webpack dev tool, this tool is best for developement, it tell you exact line of error instead of bundle file
        devServer: {
            contentBase: path.join(__dirname,'public'), // we use contentBase and give path of public folder
            historyApiFallback: true, // its for if we have any 404 error, router sends it to html page
            publicPath: '/dist/'
        }
        
    }
}



// yarn add babel-core@6.25.0 babel-loader@7.1.1 so that webpack can use babel and covert the code

//setup loader in module

// setup .babelrc file in root project

// yarn add webpack-dev-server@2.5.1 its a live server 

// setup dev server, in webpack and packetjason

// yarn add style-loader@0.18.2 css-loader@0.28.4

// yarn add sass-loader@6.0.6 node-sass@latest

//yarn add redux@latest

// yarn add react-redux@latest

// yarn add jest@latest







