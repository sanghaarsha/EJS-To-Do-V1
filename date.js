exports.getDate = function () {
    const date = new Date();

    const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
    };

    return date.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
    const date = new Date();

    const options = {
        weekday: "long",
    };

    return date.toLocaleDateString("en-US", options);
};


// module.exports = exports