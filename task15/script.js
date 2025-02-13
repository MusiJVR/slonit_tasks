function createLogger() {
    const logs = [];
    return {
        log: (message) => logs.push(message),
        getLogs: () => logs.slice()
    }
}

const logger = createLogger();
logger.log('INFO');
logger.log('WARN');
logger.log('ERROR');
console.log(logger.getLogs()); // [ 'INFO', 'WARN', 'ERROR' ]

function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const randomGenerator = createRandomGenerator(1, 10);
console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
