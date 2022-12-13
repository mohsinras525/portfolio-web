const express = require('express');
const { addProject, getProjects, getCategoryWiseData,deleteProjects} = require('../controller/projectController');
const router = express.Router();

router.route('/add').post(addProject)
router.route('/getproject').get(getProjects)
router.route('/getcategory').get(getCategoryWiseData)
router.route('/remove/:id').delete(deleteProjects)


module.exports = router