module.exports = {
    cosmosDb: {
        uri: process.env.COSMOS_DB
    },
    sendgrid_api_key: process.env.SENDGRID_API_KEY,
    port: process.env.PORT || 3001
}
