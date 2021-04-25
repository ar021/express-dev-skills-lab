const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    skillNum:
      Skill.getAll().findIndex(
        (skill) => skill.id === parseInt(req.params.id)
      ) + 1,
  });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  delete: deleteSkill,
};
