# Introduction ContribHack

This Repo contains the Program for the Hack of GitHub Contribution Graph.

## How to use it?

- Download/Clone the repo to your computer.
- Copy the files from the folder into your desired repository.
- Initialize the Repo:

```
npm init
```

- Fill the fields asked by npm init.
- Install the requirements (Mentioned below).
- Finally run:

```
node index.js
```

- This fills the Repo with empty commits till the current date.
  Since no pattern file is provided it will fill randomly.
- You can also adjust the number of commits you want to push by changing the number in 'makeCommit' function in the last line of index.js file.

## Make a custom pattern

- Your pattern file is like a grid with dimensions of 7\*X. (7 rows and X>0 columns)
- Each cell in the grid represents number of commits to be made on a day.

## Requirements

```
npm i jsonfile
npm i simple-git
```
