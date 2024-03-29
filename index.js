const createScriptExecutor = require('vm2-script-executor').default;
const Engine = require('neo-bpmn-engine');

const { MOVIE_BOOKING_SCRIPT_TASK } = require('./bpmnXml');

(async () => {
    const scriptExecutor = createScriptExecutor();

    Engine.provideService('myCustomService', {
        a: 1,
        hello: () => {
            console.log('--> hello from myCustomService');
        },
        test: () => 'test',
    })

    Engine.provideScriptExecutor(scriptExecutor);

    const process = await Engine.BpmnProcess.fromXml('movieBookingProcess', MOVIE_BOOKING_SCRIPT_TASK);

    process.getInstance$().subscribe((pi) => {
        console.log('--> process instance: ', pi);
    });

    process.deployAndStart();
})();