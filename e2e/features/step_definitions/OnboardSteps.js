import {Given, setDefaultTimeout} from '@cucmber/cucmber';

setDefaultTimeout(120 * 1000)

Given('I start Detox', async () => {
    console.log('Test started');
})