#Steps to launch project on Mac
##Install Mongodb
'''bash
brew install mongodb
'''
##start Mongodb
'''bash
brew services start mongodb-community 
'''
##start project on port 3000
'''bash
npm start
'''
##Site Instructions
Select 'choose file' to send .csv file to server
Select 'Import CSV' to import .csv file to mongo database. 
There is a unique key constraint in the database to prevent duplicate entries of items based on the combination of Customer Name and Item description.
Hit the 'Get Database Contents' button to calculate total sum of products in the database based on quantity and price of each individual product.



