const mdLinks = require('../index.js');

const testResult = [
    { text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown'},
    { text: 'Node.js', href: 'https://nodejs.org/'}
];

describe('mdLinks', () => {
    it('is a function', (done) => {
        expect (typeof mdLinks).toBe('function');
        done();
    });

    it('Return array with text and href', (done) => {
        mdLinks('./lib/__test__/test.md')
            .then(result => {
                expect(result).toEqual(testResult);
                done();
            });
    });

    it ('Error in file path', () => {
        expect(mdLinks()).rejects.toEqual('Path is not found.');
    });
    
    it('err in readFile', () => {
        expect(mdLinks()).rejects.toEqual('Error in the File.');
    });

    it('Error in the File'), () => {
        expect(mdLinks()).rejects.toEqual('Error: ENOENT: no such file or directory, open ./lib/__test__/TEST.md');
    };
});