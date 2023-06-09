const router = require('express').Router()

const {
  getJob,
  getAllJobs,
  createJob,
  deleteJob,
  updateJob,
} = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

module.exports = router
