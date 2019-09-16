module.exports = (Class) => {

    const getClasses = (req, res) => {
        Class.find()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
    };

    const createClass = (req, res) => {
        let session = new Class({
            name: req.body.name,
            classroom: req.body.classroom,
            instructor: req.body.instructor,
            timeStart: req.body.timeStart,
            timeEnd: req.body.timeEnd,
            recurring: req.body.recurring,
            date: req.body.date
        });
    
        session.save()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
    };

    const updateClass = (req, res) => {
        Class.updateOne({_id: req.params.id}, { $set: {
            name: req.body.name,
            classroom: req.body.classroom,
            instructor: req.body.instructor,
            timeStart: req.body.timeStart,
            timeEnd: req.body.timeEnd,
            recurring: req.body.recurring,
            date: req.body.date
        }})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
    };
    
    const deleteClass = (req, res) => {
        Class.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
    };

    return {
        getClasses,
        createClass,
        updateClass,
        deleteClass,
    }
}


