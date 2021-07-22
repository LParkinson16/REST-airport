const getAirportlist = require('./airportsData.json')
const airports = require('./airports')
const app = require('./app')
const airportsData = require('./airportsData');
const request = require("supertest");

describe("airport tests", () => {
    test("making a GET request will return all airport info", (done) => {
        request(app)
            .get("/airports")
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(airportsData);
                done();
            });
    });

    test("POST to create a new airport", (done) => {
        const newAirport = {
            icao: "",
            itata: "",
            name: "testName",
            city: "testCity",
            state: "testState",
            country: "testCountry",
            elevation: 700,
            lat: 45.983483,
            lon: -130.1933,
            tz: "America",
        };
        const expectedAirport = [...airportsData];
        expectedAirport.push(newAirport)
        request(app)
            .post('/airports')
            .send(newAirport)
            .expect(201)
            .end(() => {
                expect(airports).toEqual(expectedAirport);
                return done();
            });
    });

    test("retrieving a specific airport", (done) => {
        request(app)
            .get('/airports/00IS')
            .expect(200)
            .end(() => {
                done();
            });
    });


    test("update a specific airport", async () => {
        const updateAirport = {
          icao: "EXAS",
          iata: "",
          name: "Lowell Field",
          city: "Arizona",
          state: "Alaska",
          country: "US",
          elevation: 600,
          lat: 59.94919968,
          lon: -151.695999146,
          tz: "America/Anchorage",
        };
        const response = await request(app)
          .put("/airports/00MO")
          .send(updateAirport);
        expect(response.status).toBe(200);
      });


      test("delete a specific airport", async () => {
        const response = await request(app).delete("/airports/00AL");
        expect(response.status).toBe(200);
      });

});