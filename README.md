# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## json-server --watch db.json

## json-server db.json -m ./node_modules/json-server-auth

POST /register
POST /signup
POST /users

POST /register
{
"email": "olivier@mail.com",
"password": "bestPassw0rd",
"firstname": "Olivier",
"lastname": "Monge",
"age": 32
}

# login

POST /login
POST /signin

POST /login
{
"email": "olivier@mail.com",
"password": "bestPassw0rd"
}

# json-server db.json -m ./node_modules/json-server-auth -r routes.json

# https://developer.edamam.com/edamam-docs-recipe-api

# server

https://sdr-mck-api.herokuapp.com/

<!-- line chart -->

'use strict'

d3.csv('tweetdata.csv', linechart);

function linechart(data) {

    console.log(data);

    const colDict = {retweets: 'skyblue', favorites: 'coral' , tweets: 'olive'}


    const margin = {top: 50, right: 25, bottom: 25, left: 25};
    const width = 700 - margin.right - margin.left;
    const height = 500 - margin.top	- margin.bottom;

    const svg = d3.select('body').append('svg')
    	.attr('width', width + margin.right + margin.left)
    	.attr('height', height + margin.top + margin.bottom)
    	.append('g')
    	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // define scales
    const xScale = d3.scaleLinear().domain([1, 10]).range([20, width]);
    const yScale = d3.scaleLinear().domain([0, 35]).range([height, 20]);

    // define axes
    const xAxis = d3.axisBottom()
    		.scale(xScale)
    		.tickSize(height + 5)
    		.tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const yAxis = d3.axisRight()
    		.scale(yScale)
    		.tickSize(width + 10)
    		.ticks(10);
    // draw axies
    svg.append('g').attr('id', 'xAxisG').call(xAxis);
    svg.append('g').attr('id', 'yAxisG').call(yAxis);

    // Add circles
    // svg.selectAll('circle.tweets')
    // 		.data(data)
    // 		.enter()
    // 		.append('circle')
    // 		.attr('class', 'tweets')
    // 		.attr('r', 5)
    // 		.attr('cx', d => xScale(d.day))
    // 		.attr('cy', d => yScale(d.tweets))
    // 		.style('fill', 'olive');
    // svg.selectAll('circle.favorites')
    // 		.data(data)
    // 		.enter()
    // 		.append('circle')
    // 		.attr('class', 'favorites')
    // 		.attr('r', 5)
    // 		.attr('cx', d => xScale(d.day))
    // 		.attr('cy', d => yScale(d.favorites))
    // 		.style('fill', 'coral');
    // svg.selectAll('circle.retweets')
    // 		.data(data)
    // 		.enter()
    // 		.append('circle')
    // 		.attr('class', 'retweets')
    // 		.attr('r', 5)
    // 		.attr('cx', d => xScale(d.day))
    // 		.attr('cy', d => yScale(d.retweets))
    // 		.style('fill', 'skyblue');
    // add lines
    const tweetLine = d3.line()
    		.x(d => xScale(d.day))
    		.y(d => yScale(d.tweets));
    svg.append('path')
    		.attr('class', 'tweets')
    		.attr('d', tweetLine(data))
    		.attr('fill', 'none')
    		.attr('stroke', 'olive')
    		.attr('stroke-width', 5)

    const favoriteLine = d3.line()
    		.x(d => xScale(d.day))
    		.y(d => yScale(d.favorites));
    svg.append('path')
    		.attr('class', 'favorites')
    		.attr('d', favoriteLine(data))
    		.attr('fill', 'none')
    		.attr('stroke', 'coral')
    		.attr('stroke-width', 5)

    const retweetLine = d3.line()
    		.x(d => xScale(d.day))
    		.y(d => yScale(d.retweets));
    svg.select('path')
    		.attr('class', 'retweets')
    		.attr('d', retweetLine(data))
    		.attr('fill', 'none')
    		.attr('stroke', 'skyblue')
    		.attr('stroke-width', 5)

    // interactivity
    d3.selectAll('path')
    	.on('mouseover', highlightLine);
    d3.selectAll('path')
    	.on('mouseout', deHighlightLine);

    function highlightLine(d) {
    	let col = d3.select(this).attr('stroke');
    	let sw = d3.select(this).attr('stroke-width');
    	d3.select(this).attr('stroke', d3.rgb(col).brighter(.2));
    	d3.select(this).attr('stroke-width', 10);
    };

    function deHighlightLine(d) {
    	let col = d3.select(this).attr('class');
    	let sw = d3.select(this).attr('stroke-width');
    	d3.select(this).attr('stroke', colDict[col]);
    	d3.select(this).attr('stroke-width', 5);
    };

    // legend
    var legend_keys = ["retweets", "favorites", "tweets"]

var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
.enter().append("g")
.attr("class","lineLegend")
.attr("transform", function (d,i) {
return "translate(" + (margin.left) + "," + (i\*20)+")";
});

lineLegend.append("text").text(function (d) {return d;})
.attr("transform", "translate(15, 6)"); //align texts with boxes

lineLegend.append("rect")
.attr("fill", d => colDict[d])
.attr("width", 12).attr('height', 5);

    // title

d3.select('svg')
.append('text')
.html('Tweets Line-Chart')
.attr('x', width / 2 - margin.right)
.attr('y', margin.top / 2)
.attr('font', 'Georgia')
.style('font-size', 20);

};
