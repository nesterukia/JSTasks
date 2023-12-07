// ----------Куча комментариев----------------------------------------------
//
// ==UserScript==
// @name Hello World
// @namespace absolvo.ru
// @version 0.01
// @source absolvo.ru
// @description Этот скрипт покажет вам алерт с "hello word" на каждой странице, кроме исключений!
// @include *
// @exclude http://*.habrahabr.ru/*
// @exclude habrahabr.ru*
// @exclude absolvo.ru*
// ==/UserScript==
const arr = ["shorts", "instagram"];
arr.forEach((s)=>{
  if(window.location.href.includes(s)){
    window.location.replace("https://www.coursera.org/professional-certificates/meta-front-end-developer");
  }
});
