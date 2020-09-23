/********************
 * YOUR CODE BELOW! *
 ********************/
let x;
let y;

function moreThan5(x) {
  return x > 5;
}

function isNewTopScore(x, y){
  return x > y;
}

function isInDanger(x, y) {
  x = x >= 60;
  y = y <= 71;
  z = x && y;
  return z;
}

function isCoasting(x) {
  return;
}
function isSucceeding(x) {
  return;
}
function isFailing(x) {
  return x < 60;
}
function isAcing(x) {
  return x > 92;; 
}
function isStudent(x) {
  return x === 'student';
}
function isTeacher(x) {
  return x === 'teacher';
}
function isAdmin(x) {
  return x === 'admin';
}
function isElementary(x) {
  return x === 'elementary';
}
function areDifferentPeople(x, y) {
  return x !== y;
}
function isMiddleSchoolTeacher(x, y) {
  return;
}
function notAnElementarySchoolAdministrator(x, y) {
  x = x !== 'elementary school';
  y = y !== 'administrator';
  z === true
  return z;
}





/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
