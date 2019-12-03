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

    it ('Path is not found.', () => {
        expect(mdLinks('')).rejects.toStrictEqual('Path is not found.');
    });
    
    it('Error in the File.', (done) => {
        mdLinks('./lib/__test__/tes.md')
            .catch(result => {
                expect(result).toStrictEqual('Error in the File.');
                done();
        });
    });
});