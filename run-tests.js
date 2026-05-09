require('dotenv').config();

const newman = require('newman');
const fs = require('fs');

const environment = JSON.parse(
    fs.readFileSync(
        './environments/Adjutor_Test_Environment.postman_environment.json'
    )
);

environment.values.forEach((value) => {

    if (value.key === 'bearerToken') {

        value.value = process.env.BEARER_TOKEN;

    }
});

newman.run({
    collection: require('./collections/Adjutor_Decisioning_API_Test_Suite.postman_collection.json'),
    environment: environment,
    reporters: 'cli'
}, function (err) {

    if (err) {

        throw err;

    }

    console.log('Adjutor API automation completed successfully.');
});