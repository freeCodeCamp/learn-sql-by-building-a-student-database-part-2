const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should print the results of the suggested query correctly', async () => {
    const output = await getCommandOutput('./student_info.sh');

    assert(/\nComputer Networks\nComputer Systems\nServer Administration\nUNIX\n{1}$/g.test(output));
  });
});
