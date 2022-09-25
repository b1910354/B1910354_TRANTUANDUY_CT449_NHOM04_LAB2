const config = {
    app: {
        // use port 3000 unless there exists a preconfigured port or reling user environment
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/contactbook"
    }
};

module.exports = config;

