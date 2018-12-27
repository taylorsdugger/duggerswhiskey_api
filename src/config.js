module.exports = {
    cosmosDb: {
        uri: '#{COSMOS_DB}#'
    },
    sendgrid_api_key: '#{SENDGRID_API_KEY}#',
    port: process.env.port || 3001
}