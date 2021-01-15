module.exports = async function (callback) {
    setInterval(async () => await callback(), 500);
};