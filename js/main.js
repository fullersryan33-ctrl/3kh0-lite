console.warn(
  "%cHello!!",
  "color: red; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "Feel free to use anything you find here for your projects; credit is appreciated but not required! Visit my website at https://3kh0.net for more information."
);

// this setting controls if ads are shown,
// more info on the README.md file
var adStatus = localStorage.getItem("adConsent") === "true"; // default: true

if (!adStatus) {
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    console.log("Ads enabled, thank you for your support!");
  })();
}

const script = document.createElement("script");
script.src = "https://data.3kh0.net/script.js";
script.defer = true;
script.setAttribute("data-website-id", "47d72bde-ba44-4125-b161-00e0c2f5b7f0");
document.head.appendChild(script);
script.onload = function() {
  console.log("Data script loaded");
  umami.track([location.hostname, "pageview"].join("/"));
};

const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
  console.log("Title set to: " + local_title);
}
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
  console.log("Icon set to: " + local_icon);
}
document.addEventListener("DOMContentLoaded", function () {
  var selected = document.querySelector(".webgl-content") ||
    document.querySelector("#gameContainer") ||
    document.querySelector("#canvas-container") ||
    document.querySelector("#unity-container") ||
    document.querySelector("#ruffle") ||
    document.querySelector("#c2canvasdiv") ||
    document.querySelector("canvas");
  if (!selected || !selected.parentNode) return;
  var wrapper = document.createElement("div");
  wrapper.style.width = "50%";
  wrapper.style.margin = "0 auto";
  wrapper.style.border = "1px solid #2a2a2a";
  wrapper.style.borderRadius = "12px";
  wrapper.style.boxSizing = "border-box";
  wrapper.style.background = "#1f1f1f";
  wrapper.style.position = "relative";
  wrapper.style.overflow = "hidden";
  wrapper.style.aspectRatio = "16/9";
  selected.parentNode.insertBefore(wrapper, selected);
  wrapper.appendChild(selected);
  selected.style.width = "100%";
  selected.style.height = "100%";
  var inner = selected.querySelector("#gameContainer") || selected.querySelector("canvas") || selected;
  if (inner) {
    inner.style.width = "100%";
    inner.style.height = "100%";
    inner.style.maxHeight = "100%";
    inner.style.aspectRatio = "16/9";
  }
  var btn = document.createElement("button");
  btn.setAttribute("aria-label", "Fullscreen");
  btn.style.position = "absolute";
  btn.style.right = "8px";
  btn.style.bottom = "8px";
  btn.style.width = "36px";
  btn.style.height = "36px";
  btn.style.borderRadius = "8px";
  btn.style.background = "rgba(0,0,0,0.55)";
  btn.style.border = "1px solid rgba(255,255,255,0.2)";
  btn.style.color = "#fff";
  btn.style.display = "inline-flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.cursor = "pointer";
  btn.style.backdropFilter = "blur(2px)";
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4"/><path d="M15 3h4a2 2 0 0 1 2 2v4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M15 21h4a2 2 0 0 0 2-2v-4"/></svg>';
  btn.onclick = function () {
    var el = wrapper;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };
  wrapper.appendChild(btn);
});
