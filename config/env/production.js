
const ENV = process.env,
    port = ENV.WEB_PORT || 80,
    host = ENV.IP || '127.0.0.1',
    mongo = ENV.MONGO_URL || '',
    emailAddr = ENV.EMAIL_ADDR || '',
    emailPass = ENV.EMAIL_PASS || '',
    supportEmailAddr = ENV.SUPP_EMAIL_ADDR || '',
    eventname = ENV.EVENT_NAME,
    eventMediaLinks = {
        website: ENV.WEB_SITE,
        facebook: ENV.FACEBOOK,
        twitter: ENV.TWITTER,
        google: ENV.GOOGLE_PLUS
    },
    maxNumOfUsersInTeam = ENV.MAX_USERS,
    adminEmail = ENV.ADMIN_EMAIL,
    eventDate = ENV.EVENT_DATE,
    eventLocation = ENV.EVENT_LOCATION;

module.exports = {
    port: 3000,
    host: 'localhost',
    db: 'mongodb://mta.hackathon:mtahack2017@ds145178.mlab.com:45178/registrationplatform',
    emailAddr: 'mta.hackathon@gmail.com',
    emailPass: 'mtahack2017',
    supportEmailAddr:'mta.hackathon@gmail.com',
    eventname: eventname,
    eventwebsite: eventMediaLinks.website,
    eventMediaLinks: eventMediaLinks,
    maxNumOfUsersInTeam: maxNumOfUsersInTeam,
    adminEmail: 'mta.hackathon@gmail.com',
    eventDate: eventDate,
    eventLocation: eventLocation
};

