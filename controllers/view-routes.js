const router = require('express').Router();
const{ post, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        let posts = await post.findAll()
        posts = posts.map(post => post.get({ plain: true }))
        res.render('home', {
            projects,
            logged_in: res.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/project/:id', async (req, res) => {
    try {
        let post = await post.findByPk(req.params.id)
        project = post.get({ plain: true })

        res.render('post', {
            post, 
            logged_in: req.session.logged_in
        })

    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;