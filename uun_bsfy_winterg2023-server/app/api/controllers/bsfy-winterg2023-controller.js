"use strict";
const BsfyWinterg2023Abl = require("../../abl/bsfy-winterg2023-abl.js");

class BsfyWinterg2023Controller {
  init(ucEnv) {
    return BsfyWinterg2023Abl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return BsfyWinterg2023Abl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return BsfyWinterg2023Abl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new BsfyWinterg2023Controller();
