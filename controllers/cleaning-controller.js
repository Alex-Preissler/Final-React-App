const db = require("../models");

module.exports = {

	Create: function(req, res) {

		const list = {
			listDate: req.body.listDate,
			listName: req.body.listName
		}

		db.CleanList.create(list)
			.then(response => {
				const newListId = response._id;
				const user = req.body._id;
				db.User.findOneAndUpdate({ _id: user }, { $push: { cleaning: newListId }}, { new: true })
					.then(response => {
						res.status(200).end();
					})
					.catch(err => {
						res.json(err);
					});
			})
			.catch(err => {
				res.json(err);
			});
	},
	CreateSublist: function(req, res) {
		const listId = req.body._id;
		const title = req.body.subListTitle;
		console.log(req.body);

		db.CleanItem.create({title: title})
			.then(response => {
				console.log(response);
				db.CleanList.findOneAndUpdate({_id: listId}, { $push: { sublist: response._id}})
					.then(result => {

						console.log(result)
						res.status(200).json(response);
					})
			})
	},
	CreateItem: function(req, res) {
		console.log(req.body);
		const listId = req.body._id;
		const item = {
			listItem: req.body.listItem,
			checked: false
		}
		db.CleanItem.findOneAndUpdate({_id: listId}, { $push: { items: item }})
			.then(result => {
				console.log(result);
				res.status(200).json(result);
			})
	},
	Get: function(req, res) {
		console.log(req.params.id);
		db.User.find({ _id: req.params.id })
			.then(result => {
				console.log(result);
				let lists = result[0].cleaning;
				res.status(200).json(lists);
			})
			.catch(err => {
			res.end();
			})
	},
	GetList: function(req, res) {
		let query = JSON.parse(req.params.id);
		console.log(query);
		db.CleanList.find({ _id: {$in: query }})
			.then(result => {
				console.log(result);
				let list = result;
				res.status(200).json(list);
			})
			.catch(err => {
			res.end();
			})
	},
	GetItems: function(req, res) {
		let query = JSON.parse(req.params.id);
		db.CleanItem.find({ _id:{$in: query }})
			.then(result => {
				console.log(result);
				let subList = result;
				res.status(200).json(subList);
			})
			.catch(err => {
			res.end();
			})
	},
    Delete: function(req, res) {

		let id = req.params.id;

		db.CleanList.deleteOne({ _id: id })
			.then(result => {
				res.status(200).end();
			})
	}
}