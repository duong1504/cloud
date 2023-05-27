const fs = require ( 'fs' );
const file1content = fs.readFileSync('file1.txt')
const file2content = fs.readFileSyc('file2.txt')
fs.writeFileSync('file3.txt', file1content + ' ' + file2content, (err) => {
    if(err){
        throw err;
    }
})

fs.readFile('./file3.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});
