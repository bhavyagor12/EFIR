const MyContract = artifacts.require("EFIR");
const EFIR = artifacts.require("EFIR");

module.exports = function (deployer, owner) {
  deployer.deploy(EFIR, "0x1d50e470d63e11C1e6B6030C512633860a93a5F2");
};
