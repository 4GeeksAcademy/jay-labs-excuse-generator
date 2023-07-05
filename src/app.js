/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// excuse contents
let who = [
  "Steve Buscemi",
  "Ronald McDonald",
  "An angry frog",
  "The actual void lord itself",
  "The person that invented envelope adhesive",
  "Death metal Zombie Princess Diana",
  "Abraham Lincoln's moustache",
  "Chuck Norris"
];
let action = [
  "de-materialized",
  "created a wonderful puree using only",
  "forced self-awareness upon",
  "falcon punched",
  "performed a 'divide by zero' on",
  "awkwardly caressed"
];
let what = [
  "my favorite underwear",
  "the enter keys from all my keyboards",
  "an innocent kitten",
  "my second favorite Backstreet Boys poster",
  "a heavily soiled urinal cake",
  "a nerf blaster (with 6 confirmed kills)"
];
let when = [
  "on Christmas Eve",
  "whilst a hot pocket was being microwaved",
  "during the guitar solo in Hanson's breakaway hit MmmBop",
  "while I was in the bathroom",
  "while I was completing my excuse generator project",
  "during a barbershop quartet rendition of a Skrillex dubstep song"
];

// let who = [
//   "Bertram Gilfoyle",
//   "Dinesh Chugtai",
//   "Jared Dunn",
//   "Jian Yang",
//   "Richard Hendricks",
//   "Erlich Bachman"
// ];
// let action = ["deleted", "overwrote", "corrupted", "wiped", "replaced"];

// let what = [
//   "my repositories",
//   "my hard drive",
//   "my working directory",
//   "the entire project"
// ];

// let when = [
//   "right before release",
//   "in the middle of the client presentation",
//   "directly after launch",
//   "while I was sleeping",
//   "instead of debugging"
// ];

// excuse function
function generateExcuse() {
  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    "."
  );
}

window.onload = function() {
  // console.log(generateExcuse());
  // console.log(excuseElement);
  let excuse = generateExcuse();
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
};
