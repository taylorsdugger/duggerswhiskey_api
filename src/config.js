module.exports = {
    mongoDB: {
        uri: process.env.MONGO_DB_ATLAS
    },
    sendgrid_api_key: process.env.SENDGRID_API_KEY,
    port: process.env.PORT || 3001,
    adminEmail: process.env.ADMIN_EMAIL || 'taylorsdugger@gmail.com'
}
