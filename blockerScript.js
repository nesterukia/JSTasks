const arr = ["shorts", "instagram"];

arr.forEach((s)=>{
  if(window.location.href.includes(s)){
     window.location.replace("https://www.coursera.org/professional-certificates/meta-front-end-developer");
  }
});
