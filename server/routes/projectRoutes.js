const express = require('express');
const { addProject, getProjects, getCategoryWiseData} = require('../controller/projectController');
const router = express.Router();

router.route('/add').post(addProject)
router.route('/getproject').get(getProjects)
router.route('/getcategory').get(getCategoryWiseData)


module.exports = router