const express = require("express");
const common = require("../services/commonService");
const router = express.Router();

const additional = require("../controller/additional_controller");
const material_rfid_link = require("../controller/material_rfid_link_controller");
const findMaterial = require("../controller/findMaterial_controller");
const hht_reports = require("../controller/hht_reports_controller");     
const auth = require("../controller/auth_Controller");
const hhtStockTake = require("../controller/hht_materialStockTake_controller")
const hhtlink= require("../controller/dLinkMaterial_controller")

router.use("/additional", additional);
router.use("/material_rfid_link", material_rfid_link);
router.use("/findMaterial", findMaterial);
router.use("/hht_reports", hht_reports);
router.use("/auth", auth); 
router.use("/hhtStockTake", hhtStockTake);
router.use("/link", hhtlink);

module.exports = router;
