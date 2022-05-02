## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial release after splitting other SQL tutorial into two parts

## [v1.0.1]

- Add creation of bash history in `reset.sh`
- Add continue commands

## [v1.0.2]

- Only disconnect user `freecodecamp` from db when resetting

## [v1.0.3]

- Fix SQL query and expected result in exercise 2450 - 'Add echo query result'

## [v1.0.4]

- Restructure commits to use new style. Instead of loading a new test file, and commenting out the old one on each commit, this loads all the tests in the `INIT` commit and uses mocha settings to only run tests in a specific file. The commits now just change the test file that should run.
- There was an issue with the last commit not loading after using the reset button in a tutorial. I added a final commit at end that seems to have resolved it.
- Add `exit` flag to mocha so tests can't hang
- Fix wrong hints on steps 1390, 1570, and 1730
- Clarify instructions on 2200, 2230, 2250, and 2270
