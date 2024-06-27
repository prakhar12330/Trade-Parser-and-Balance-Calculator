const axios = require("axios");

module.exports = async (coinType, curDate) => {
    try {
        const options = {
            method: "GET",
            url: `https://pro-api.coingecko.com/api/v3/coins/${coinType}/history?date=${curDate}`,
            headers: {
                accept: "application/json",
                "x-cg-pro-api-key": "CG-aHURvre4WN5LSUbhyf9KiJ6p",
            },
        };
        const res = await axios.request(options);
        return res.data.market_data.current_price.inr;
    } catch (error) {
        console.log(error);
    }
};
