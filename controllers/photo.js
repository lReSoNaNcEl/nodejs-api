const Photo = require('../models/Photo')
const fs = require('fs')

module.exports.getAll = async (req, res) => {
    const photos = await Photo.find()
        .where('owner')
        .equals(req.user.id)
    res.status(200).json(photos)
}

module.exports.getBydId = async (req, res) => {
    const photo = await Photo.findById(req.params.id)

    if (photo)
        if (photo.owner.toString() === req.user.id.toString())
            res.status(200).json(photo)
        else
            res.status(403).json({
                message: `You don't have permissions for overview this photo`
            })
    else
        res.status(404).json({
            message: 'Photo not found'
        })
}

module.exports.create = async (req, res) => {
    if (req.file) {
        const photo = new Photo({
            name: req.file.originalname,
            url: req.file.path,
            owner: req.user.id
        })
        await photo.save()
        res.status(201).json(photo)
    }
    else
        res.status(400).json({
            message: 'Server is waiting that you will upload photo'
        })
}

module.exports.update = async (req, res) => {
    let photo = await Photo.findById(req.params.id)

    if (photo)
        if (req.file)
            if (photo.owner.toString() === req.user.id.toString()) {
                fs.unlink(process.cwd() + '/' + photo.url, (err) => console.log(err))

                await photo.update({
                    name: req.file.originalname,
                    url: req.file.path
                })

                photo = await Photo.findById(req.params.id)
                res.status(200).json(photo)
            }
            else
                res.json({
                    message: `You don't have permissions for update this photo`
                })
         else
            res.status(400).json({
                message: 'Server is waiting that you will upload photo'
            })
    else
        res.status(404).json({
            message: 'Photo not found'
        })
}

module.exports.delete = async (req, res) => {
    let photo = await Photo.findById(req.params.id)

    if (photo)
        if (photo.owner.toString() === req.user.id.toString()) {
            fs.unlink(process.cwd() + '/' + photo.url, (err) => console.log(err))

            await photo.remove()

            res.status(200).json({
                message: 'Photo was deleted'
            })
        }
        else
            res.json({
                message: `You don't have permissions for delete this photo`
            })
    else
        res.status(404).json({
            message: 'Photo not found'
        })
}