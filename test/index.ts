import Jasmine from 'jasmine';

const options = {};
const jasmine = new Jasmine(options);
jasmine.loadConfig({
  random: true,
  spec_dir: 'test',
  spec_files: [
    './**/*.test.ts',
  ],
  stopSpecOnExpectationFailure: false,
});

jasmine.execute();
