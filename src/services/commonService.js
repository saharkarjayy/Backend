module.exports.errorResolve = (err) => {
    return { error: err };
};

module.exports.successResolve = (data) => {
    return { error: null, result: data };
};

module.exports.sendResponse = (success = true, status = 200, message = '', response = null, error = 0) => {
    return response ? {
        status: status,
        success: success,
        error: error,
        message: message,
        response: response
    } : {
        status: status,
        success: success,
        error: error,
        message: message
    };
};

