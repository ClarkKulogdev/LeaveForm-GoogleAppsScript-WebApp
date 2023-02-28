# Leave form Web App using Google Apps Script

## Overview
This is a leave form web application created using JavaScript and Google Apps Script that allows users to submit their leave requests based on a total of 24 days of leave. The app allows users to submit half-day and whole-day leave requests, select leave dates by range, and automatically exclude weekends from the date range. The app also reflects the user's leave balance and computes the pro-rated accumulated leave from January to the current month. Google Spreadsheet is used as the database for this project.

## Features

* Half-day and whole-day leave request submission
* Leave date selection by range (excluding weekends)
* Automatic leave balance reflection
* Automatic pro-rated accumulated leave computation


## Links

* Link to the web app: <https://script.google.com/macros/s/AKfycbxs6wm5Dd_FavXghLuZigHDLsv90PIRERMDtw1pGfxTXv-nMF0WdnuHr11i-Wi0L85EbQ/exec>

* Link to the spreadsheet: 
<https://docs.google.com/spreadsheets/d/1NZwevxnXr04Qsz-e3HBQcRj7fY4YZ9-wbDewCbQBxHA/edit?usp=sharing>

## How to Use

To use this web app, follow these steps:

1. Access the web app using the link provided above.
2. Fill out the leave request form, selecting the type of leave (half-day or whole-day) and the start and end dates of your leave. The app will automatically exclude weekends from the date range.
3. Submit your leave request by clicking the "Submit" button.
4. The app will display your leave balance and the pro-rated accumulated leave from January to the current month by a pop-up message.

Please make sure to update tests as appropriate.

## Notes
* This app was created using Google Apps Script and JavaScript.
* The app uses Google Spreadsheet as its database.
* The app calculates leave balances and accumulated leave based on a total of 24 days of leave.
* The app automatically excludes weekends from the date range.
* The app does not currently include any authentication or user management features.
