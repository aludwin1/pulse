# Pulse
## Author: Aaron Ludwin

## Description

Pulse is an app that let's get a pulse on your brand or company. By simply typing
in your company's or brand's name, you will immediately be able to see how much news coverage
about your brand is negative or positive. Additionally, you're able to see the top 5 stories
for each sentiment category based on Linkedin shares.

If you have multiple brands that you would like to track, you can save multiple queries. State
persists on local storage, and you can delete your history if necessary.

## Getting Started

1. Type in your company name at start up (at the moment, search only accepts one word and doesn't accept spaces)
2. Type in how many days back - starting from today - you would like to look (max is 30)
3. Press the "GET PULSE" button to run your query
4. If this is your first time using the app, the first page you will see is the Positive Sentiment dashboard; on this dashboard, you can see the percentage of news that is tagged positive out of stories that tagged positive or negative (i.e. number of positive stories / (number of negative stories + number of positive stories)); neutral stories are excluded. On this page you will also see the sample size as N=# (the number of stories that were tagged positive for your lookback period). You will also find the top 5 news stories for this sentiment category based on Linkedin shares. With the exception of articles that say (No Link!) in the subtitle, all links are clickable.
5. At the bottom of this screen you will notice 5 icons - a happy face, a sad face, a magnifying glass, a refresh button, and a book. They have the following functions:

- Happy Face: This is the positive sentiment button (where you likely are right now)

- Sad Face: This is the negative sentiment button, tap here to navigate to the negative sentiment view (same information as for the positive sentiment page but with details about negative sentiment)

- Magnifying Glass: Clicking this button will navigate you to the search window you saw when you started the app

- Refresh Button: Clicking this button will refresh your dashboard with the latest data for your query.

- Book Button: Clicking this button will take you to your search history. Up to 5 of your recent searches will be stored on your phone. If you want to delete a search record, tap the "X" on the right on the search query. If you want to use one of your old search queries, press on the left side of the button and hold. A loading screen will appear when the query starts.

## Repeat Use

If you've searched on the app before, you'll notice that there is a button on the home screen under "GET PULSE" that says "VIEW LAST PULSE". If you tap that button, you will be taken to your last query, and also to the last page you were on (ex. if you on the history page when you closed the app, that's where you'll be when you click "VIEW LAST PULSE"). If you've been off of the app for more than a day, week, etc. you'll want to press the refresh button mentioned earlier to pull the latest data.

## Technology Used

- Front End is built with React-Native, React-Native-Elements, and NativeBase.
- "Complex" state is managed by Redux and Redux state is persisted via Redux-Persist.
- Data visualizations were built with React-Native-SVG-Charts.
- Aylien News API was used to crawl web for articles, determine sentiment, and identify social shares.
- I've deployed a Node/Express.js server on Heroku to manage communications between the app and the Aylien News API

## Disclaimer

This app relies on an API key that I have access to via a 14 day trial that started on 9/20/2018. Therefore, this app will no longer be functional after it's expiration.
