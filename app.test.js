const getAirportlist = require('./airportsData.json')
const airports = require('./airports')
const app = require('./app')
const airportsData = require('./airportsData');
const request = require("supertest");

describe("airport tests", ()=>{
    test("making a GET request will return all airport info", (done)=>{
        request(app)
        .get("/airports")
        .expect(200)
        .then((res)=>{
            expect(res.body).toEqual(airportsData);
            done();
        });
    });

  /*  test("POST to create a new airport", (done) => {
        const newAirport = {
            icao: "",
            itata: "",
            name: "testName",
            city: "testCity",
            state: "testState",
            country: "testCountry",
            elevation:700,
            lat :45.983483,
            lon: -130.1933,
            tz: "America",
        };
        const expectedAirport = [...airportsData];
        expectedAirport.push(newAirport)
        request(app)
        .post('/airports')
        .send(newAirport)
        .expect(201)
        .end(()=>{
            expect(airports).toEqual(expectedAirport);
            return done();
        });
    });   */         
});