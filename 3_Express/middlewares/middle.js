
function myMiddleware(req, res, next) {
    console.log('I am Custom Middleware');
    next()
}

module.exports = myMiddleware