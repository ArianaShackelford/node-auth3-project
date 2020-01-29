--- initial set up
    - npm init
    - download dependencies
        -express
        -express-session
        -bcryptjs
        -helmet
        -knex
        -nodemon
        -sqlite3
        -jsonwebtoken
    - add server script
    -initialize knex
        - set up knex file
            -useNullAsDefault
            - migrations directory
            -seeds (if going to use)
                - if so add pool as well


---- Set up database

    - create db folder
    - use knex to make a migration file and folder for users
    - create users table
        - username
        - password
        - department // string used to group users
    - knex migrate:latest

    - create db config file

---- Lets make the api

    - create index.js
    - creat api folder inside: 
        - server.js
        - router.js
        - middleware.js
    - create a users folder 
        -model
        -user-router

    -make an auth folder? like in the guided project from monday?
    
