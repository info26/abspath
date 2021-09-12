const path = require("path");

let staticPaths = {};

function setStaticPath(name, val) {
  staticPaths[name] = val;
}

function removeStaticPath(name) {
  delete staticPaths[name]
}

function resolve(dir) {
  let split = dir.split("/");
  let partial = split.splice(1).join("/");
  let abspth = split[0];

  return path.resolve(staticPaths[abspth], partial);
}

function ptsolve(dir) {
  if (dir.startsWith("@")) {
    return resolve(dir);
  }

  return path.resolve(dir);
}

module.exports = {setStaticPath, removeStaticPath, resolve, ptsolve};
