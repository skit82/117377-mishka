function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  var list1 = document.querySelector("#main-nav-list");
  var list2 = document.querySelector("#main-nav-user");
  list1.classList.add("main-nav__list--hide");
  list2.classList.add("main-nav__user--hide");
});
