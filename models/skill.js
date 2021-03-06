const skills = [
  { id: 125223, skill: "HTML" },
  { id: 127904, skill: "CSS" },
  { id: 139608, skill: "JAVASCRIPT" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
