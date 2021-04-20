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

module.exports = {
  getAll,
  getOne,
};
