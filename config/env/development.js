const ENV = process.env,
    port = 3000,
    host = ENV.IP || '127.0.0.1',
    mongo =  "mongodb://localhost/ninjadb",
    emailAddr = 'mta.hackathon@gmail.com',
    emailPass = 'mtahack2017',
    supportEmailAddr = ENV.SUPP_EMAIL_ADDR || '',
    eventname = ENV.EVENT_NAME,
    eventMediaLinks = {
        website: ENV.WEB_SITE,
        facebook: ENV.FACEBOOK,
        twitter: ENV.TWITTER,
        google: ENV.GOOGLE_PLUS
    },
    accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authToken = 'your_auth_token',
    maxNumOfUsersInTeam = ENV.MAX_USERS,
    adminEmail = 'tomer92@gmail.com';
module.exports = {
    port: port,
    host: host,
    db: mongo,
    emailAddr: emailAddr,
    emailPass: emailPass,
    supportEmailAddr: supportEmailAddr,
    eventname: eventname,
    eventwebsite: eventMediaLinks.website,
    eventMediaLinks: eventMediaLinks,
    maxNumOfUsersInTeam: maxNumOfUsersInTeam,
    adminEmail: adminEmail
};

