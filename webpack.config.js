// webpack.js.org is websit where you can get help from
// entry -> output
//path is where the file is located
//__dirname is which give the current location of directory

const path = require('path'); // we added node module path, which is used to join two paths

module.exports= {
entry: './src/app.js',  // we set this entry point so that webpack can know where to start from
output:{
    path: path.join(__dirname,'public'),
    filename:'bundle.js'
},
module:{
    //module rules lets us set how we want to run our loader
    rules:[{
        loader: 'babel-loader', //it will load babel loader
        test: /\.js/, // which files we want to test
        exclude: /node_modules/ // we dont want to include node modules
    },
    {
        test: /\.s?css$/,  // ? makes optional for both css and scss
        use:[ // use takes an array of loaders
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
},
devtool: 'cheap-module-eval-source-map', // these are webpack dev tool, this tool is best for developement, it tell you exact line of error instead of bundle file
devServer: {
    contentBase: path.join(__dirname,'public'), // we use contentBase and give path of public folder
    historyApiFallback: true // its for if we have any 404 error, router sends it to html page
}
};

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







