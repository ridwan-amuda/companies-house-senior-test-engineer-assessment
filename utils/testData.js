const testData = {

    validUser: {
        username: process.env.DEMOBLAZE_USERNAME,
        password: process.env.DEMOBLAZE_PASSWORD
    },

    invalidUser: {
        username: process.env.DEMOBLAZE_USERNAME,
        password: 'WrongPassword123!'
    },

    purchaseData: {
        name: 'Assessment Test',
        country: 'United Kingdom',
        city: 'Manchester',
        card: '4111111111111111',
        month: '09',
        year: '2027'
    }

};

module.exports = { testData };