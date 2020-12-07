/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

const assert = require("assert"),
        http = require("http");

// Here are our "basic" requirements - reasons & codes:
const urlMap = {
    "OK": 200,
    "Created": 201,
    "Moved-Permanently": 301,
    "Found": 302,
    "Bad-Request": 400,
    "Unauthorized": 401,
    "Forbidden": 403,
    "Not-Found": 404,
    "Internal-Server-Error": 500,
    "Gateway-Timeout": 504,
};

// Loop over all of our URL -> Code key-value pairs
// and test each to ensure they match up with our server.
for (const [url, statusCode] of Object.entries(urlMap)) {
    describe(url, function () {
        it(`should return /${statusCode}`, function (done) {
            http.get(`http://localhost:3000/${url}`, function (res) {
                assert.equal(res.statusCode, statusCode);
                done();
            });
        });
    });
}

// Now let's check the bonus phase URLs...
describe("/Bonus/Redirect", function () {
  it("should redirect us with a 302", function (done) {
      http.get("http://localhost:3000/Bonus/Redirect", function (res) {
          assert.equal(res.statusCode, 302);
          assert.equal(res.headers["location"], "http://localhost:3000/Forbidden");
          done();
      });
  }); 
});

describe("/Bonus/Webpage", function () {
  it("should return a simple webpage", function (done) {
      http.get("http://localhost:3000/Bonus/Webpage", function (res) {
          assert.equal(200, res.statusCode);

          // We need to wait for the response to be 
          // patched together here. To keep it simple, 
          // we're just testing whether the response's content
          // includes the word "html" anywere. 
          let body = "";
          res.on('data', function(chunk) { body += chunk; });
          res.on('end', function() {
            assert.notEqual(body.match("html"), null);
            done();
          });
      });
  });
});

describe("/Bonus/Created", function () {
    it("should return a 404 for GET requests", function (done) {
        http.get("http://localhost:3000/Bonus/Created", function (res) {
            assert.equal(res.statusCode, 404);
            done();
        });
    }); 

    it("should return a 201 for POST requests", function (done) {
        // GET requests are simple, but POST requests 
        // are much more complex! Don't let this code
        // scare you. We'll reveal some helpful NPM 
        // packages later on that help immensely.
        const options = {
            host: 'localhost',
            port: '3000',
            path: '/Bonus/Created',
            method: 'POST',
        };

        const post = http.request(options, function(res) {
            res.on('data', function () {
                assert.equal(res.statusCode, 201);
            });
            res.on('end', function () {
                done();
            });
        });

        post.write("");
        post.end();
    }); 
});