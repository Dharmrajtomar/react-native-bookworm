import cron from 'cron';
import https from 'https';

const job = new cron.CronJob("*/14 * * * * *", function() {
https
.get(process.env.API_URL, (res)=> {
    if (res.statusCode === 200) console.log("GET request sent successfully");
    else console.log("GET request failed", res.statusCode);
})
.on("error",(e)=>console.error("Error while sending request", e));
});
export default job;


// यह एक Cron Job बना रहा है जो हर **14 सेकंड** में execute होगा।

// we want to send 1 GET request every 14 seconds to the API_URL