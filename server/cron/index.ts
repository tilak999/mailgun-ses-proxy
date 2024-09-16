export const JOBS = [
    {
        cronTime: '*/1 * * * *',
        onTick: async server => {
            console.log("=> cron", new Date())
        }
    }
]