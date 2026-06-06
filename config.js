const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "923253617422",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "RAJPOOT BOT",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "RAJPOOT HACKER",

    CAPTION:
        process.env.CAPTION ||
        "POWERED BY RAJPOOT HACKER",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From RAJPOOT HACKER",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363409334515162@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://bandaheali-cdn.koyeb.app/media/bot_1780638419537.jpeg",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://mr-shaban.vercel.app",

    PORT:
        process.env.PORT ||
        "21604"
};
