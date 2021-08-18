const expect = require('chai').expect;

const courses = require("../../courses.json");
 
it('should be a a non empty list', function() {
    expect(courses).to.be.not.null;
    expect(courses.courses).to.be.not.empty;
    expect(courses.courses.length).to.be.eq(3);
});
