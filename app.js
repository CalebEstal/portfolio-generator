const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//console.log(profileDataArgs);

//Notice the lack of parantheses around the 'ProfileDataArr' parameter?
//const printProfileData = profileDataArr => {
    //This...
    //for (let i=0; i < profileDataArr.length; i++) {
        //console.log(profileDataArr[i]);
    //}

    //console.log('==============');

    //Is the same as this....
    //profileDataArr.forEach(profileItem => console.log(profileItem));
//};

//printProfileData(profileDataArgs);

//=============================================================================================================


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfilio Complete! Check out index.html to see the output!')
});