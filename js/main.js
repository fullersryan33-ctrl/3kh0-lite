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
  var candidates = ["#wrapper","#game",".webgl-content","#gameContainer","#canvas-container","#unity-container","#ruffle","#c2canvasdiv","canvas","iframe","video"];
  var root = null;
  for (var i=0;i<candidates.length;i++){ var el = document.querySelector(candidates[i]); if(el){ root = el; break; } }
  if (!root || !root.parentNode) return;
  var style = document.createElement("style");
  style.textContent = 
    ".wg-wrapper{position:relative;margin:24px auto;max-width:min(1200px,95vw);width:100%;background:linear-gradient(180deg,#0f0f12 0%,#0a0a0d 100%);border-radius:16px;box-shadow:0 18px 40px rgba(0,0,0,.45);overflow:hidden;display:flex;align-items:center;justify-content:center}"+
    ".wg-frame{position:relative;border-radius:16px;box-shadow:0 10px 24px rgba(0,0,0,.35);overflow:hidden}"+
    ".wg-overlay-top{position:absolute;left:12px;right:12px;top:12px;display:flex;align-items:center;justify-content:space-between;pointer-events:none}"+
    ".wg-group{display:flex;gap:10px;align-items:center;pointer-events:auto}"+
    ".wg-button{display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0 12px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.55);color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;cursor:pointer;transition:transform .15s ease,background .15s ease}"+
    ".wg-button:hover{transform:translateY(-1px);background:rgba(255,255,255,.08)}"+
    ".wg-overlay-bottom{position:absolute;right:12px;bottom:12px;display:flex;gap:8px}"+
    ".wg-label{color:#fff;font-size:12px;opacity:.85;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}";
  document.head.appendChild(style);
  var wrapper = document.createElement("div");
  wrapper.className = "wg-wrapper";
  root.parentNode.insertBefore(wrapper, root);
  var frame = document.createElement("div");
  frame.className = "wg-frame";
  wrapper.appendChild(frame);
  frame.appendChild(root);
  root.style.margin = "0";
  root.style.display = "block";
  var overlayTop = document.createElement("div");
  overlayTop.className = "wg-overlay-top";
  var leftGroup = document.createElement("div");
  leftGroup.className = "wg-group";
  var moreBtn = document.createElement("button");
  moreBtn.className = "wg-button";
  moreBtn.textContent = "More";
  leftGroup.appendChild(moreBtn);
  var rightGroup = document.createElement("div");
  rightGroup.className = "wg-group";
  var win = document.createElement("div");
  win.className = "wg-label";
  win.textContent = "Win count: 0";
  rightGroup.appendChild(win);
  var settingsBtn = document.createElement("button");
  settingsBtn.className = "wg-button";
  settingsBtn.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.1V3a2 2 0 1 1 4 0v.09c0 .63.37 1.21.94 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.14-.33 1.82v.09c.31.57.89.94 1.51.94H21a2 2 0 1 1 0 4h-.09c-.63 0-1.21.37-1.51.94z\"></path></svg>";
  rightGroup.appendChild(settingsBtn);
  overlayTop.appendChild(leftGroup);
  overlayTop.appendChild(rightGroup);
  wrapper.appendChild(overlayTop);
  var overlayBottom = document.createElement("div");
  overlayBottom.className = "wg-overlay-bottom";
  var fsBtn = document.createElement("button");
  fsBtn.className = "wg-button";
  fsBtn.setAttribute("aria-label","Fullscreen");
  fsBtn.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3H5a2 2 0 0 0-2 2v4\"/><path d=\"M15 3h4a2 2 0 0 1 2 2v4\"/><path d=\"M9 21H5a2 2 0 0 1-2-2v-4\"/><path d=\"M15 21h4a2 2 0 0 0 2-2v-4\"/></svg>";
  overlayBottom.appendChild(fsBtn);
  wrapper.appendChild(overlayBottom);
  var probe = function(){
    var inner = root.querySelector && (root.querySelector("iframe") || root.querySelector("canvas") || root.querySelector("video") || root.querySelector("#gameContainer") || root.querySelector("#c2canvasdiv"));
    return inner || root;
  };
  var naturalRatio = function(){
    var el = probe();
    var tag = el.tagName ? el.tagName.toLowerCase() : "";
    if(tag === "canvas"){ var aw = parseInt(el.getAttribute("width"))||el.clientWidth; var ah = parseInt(el.getAttribute("height"))||el.clientHeight; if(aw>0&&ah>0) return aw/ah; }
    if(tag === "video"){ if(el.videoWidth>0&&el.videoHeight>0) return el.videoWidth/el.videoHeight; }
    if(tag === "iframe"){ var iw = el.clientWidth||el.offsetWidth; var ih = el.clientHeight||el.offsetHeight; if(iw>0&&ih>0) return iw/ih; }
    var sw = root.scrollWidth||root.clientWidth||0; var sh = root.scrollHeight||root.clientHeight||0; if(sw>0&&sh>0) return sw/sh; return 16/9;
  };
  var setSize = function(w,h){
    var el = probe();
    var tag = el.tagName ? el.tagName.toLowerCase() : "";
    frame.style.width = w+"px";
    frame.style.height = h+"px";
    if(tag === "iframe"){ el.style.width = "100%"; el.style.height = "100%"; }
    else if(tag === "video"){ el.style.width = "100%"; el.style.height = "100%"; }
    else if(tag === "canvas"){ el.style.width = "100%"; el.style.height = "100%"; }
    else { el.style.width = "100%"; el.style.height = "100%"; }
  };
  var fit = function(){
    var viewportW = document.fullscreenElement===wrapper ? window.innerWidth : Math.min(wrapper.parentElement.clientWidth, wrapper.clientWidth);
    var viewportH = document.fullscreenElement===wrapper ? window.innerHeight : Math.max(320, Math.floor(window.innerHeight*0.8));
    wrapper.style.width = document.fullscreenElement===wrapper ? "100vw" : "100%";
    wrapper.style.height = document.fullscreenElement===wrapper ? "100vh" : "auto";
    var ratio = naturalRatio();
    var targetW = Math.min(viewportW, Math.floor(viewportH*ratio));
    var targetH = Math.floor(targetW/ratio);
    setSize(targetW, targetH);
  };
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", fit);
  document.addEventListener("fullscreenchange", fit);
  try{ var mo = new MutationObserver(function(){ fit(); }); mo.observe(root,{childList:true,subtree:true,attributes:true}); }catch(e){}
  fsBtn.onclick = function(){ if(document.fullscreenElement===wrapper){ document.exitFullscreen && document.exitFullscreen(); } else { wrapper.requestFullscreen && wrapper.requestFullscreen(); } };
});
