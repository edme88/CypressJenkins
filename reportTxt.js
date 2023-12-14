const pruebajson = require("cypress/reports/html/.jsons");
const fs = require("fs");
module.exports = pruebajson;

let testsTotales = 0;
let testPasados = 0;
let testsFallados = 0;
let testsSkipped = 0;
let data = "";

console.log(`Reporte JLR de los tests`);

pruebajson = pruebajson.results[0].suites;

pruebajson.forEach((suite) => {
  console.log(`Suite llamada ${suite.title}`);
  suite.tests.forEach((testCase, id) => {
    console.log(`Test ${id}: ${testCase.title}`);

    if (testCase.state === "passed") {
      testPasados++;
    } else if (testCase.state === "failed") {
      testsFallados++;
    } else if (testCase.state === "pending") {
      testsSkipped++;
    }
  });
});

testsTotales = testPasados + testsFallados + testsSkipped;

console.log(`Tests totales = ${testsTotales}`);
console.log(`Tests Pasados = ${testPasados}`);
console.log(`Tests Fallados = ${testsFallados}`);
console.log(`Tests Skipped = ${testsSkipped}`);
