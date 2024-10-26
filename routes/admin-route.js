const express = require('express');
const adminController = require('../controllers/admin-controller')

const router = express.Router()


// User Management
router.get('/user-list', adminController.getUserList); 
router.patch('/user-list/:userId', adminController.updateUserRole); 

// Vocabulary Management
router.get('/vocabulary/:categoryId', adminController.getVocabList); 
router.post('/vocabulary/:categoryId', adminController.addVocabulary); 
router.patch('/vocabulary/:vocabularyId', adminController.updateVocabulary); 
router.delete('/vocabulary/:vocabularyId', adminController.deleteVocabulary);

//Search history 
router.get('/user-search', adminController.getUserSearchHis) 


module.exports = router;
