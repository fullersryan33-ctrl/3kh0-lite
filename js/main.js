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
  var root = document.querySelector("#wrapper") || document.querySelector("#game") || document.querySelector(".webgl-content") || document.querySelector("#gameContainer") || document.querySelector("#canvas-container") || document.querySelector("#unity-container") || document.querySelector("#ruffle") || document.querySelector("#c2canvasdiv") || document.querySelector("canvas") || document.querySelector("iframe") || document.querySelector("video");
  if (!root || !root.parentNode) return;
  var wrap = document.createElement("div");
  wrap.style.width = "50%";
  wrap.style.margin = "24px auto";
  wrap.style.position = "relative";
  wrap.style.borderRadius = "16px";
  wrap.style.overflow = "hidden";
  wrap.style.background = "linear-gradient(180deg,#0e0e10 0%,#0a0a0c 100%)";
  wrap.style.boxShadow = "0 18px 40px rgba(0,0,0,0.4)";
  root.parentNode.insertBefore(wrap, root);
  var contentFrame = document.createElement("div");
  contentFrame.style.position = "absolute";
  contentFrame.style.top = "50%";
  contentFrame.style.left = "50%";
  contentFrame.style.transformOrigin = "center center";
  contentFrame.style.borderRadius = "16px";
  contentFrame.style.overflow = "hidden";
  contentFrame.style.boxShadow = "0 10px 24px rgba(0,0,0,0.35)";
  wrap.appendChild(contentFrame);
  contentFrame.appendChild(root);
  var overlayTop = document.createElement("div");
  overlayTop.style.position = "absolute";
  overlayTop.style.top = "12px";
  overlayTop.style.left = "12px";
  overlayTop.style.right = "12px";
  overlayTop.style.display = "flex";
  overlayTop.style.justifyContent = "space-between";
  overlayTop.style.alignItems = "center";
  overlayTop.style.pointerEvents = "none";
  wrap.appendChild(overlayTop);
  var leftGroup = document.createElement("div");
  leftGroup.style.display = "flex";
  leftGroup.style.gap = "8px";
  leftGroup.style.pointerEvents = "auto";
  overlayTop.appendChild(leftGroup);
  var moreBtn = document.createElement("button");
  moreBtn.textContent = "More";
  moreBtn.style.padding = "8px 12px";
  moreBtn.style.borderRadius = "10px";
  moreBtn.style.border = "1px solid rgba(255,255,255,0.15)";
  moreBtn.style.background = "rgba(0,0,0,0.5)";
  moreBtn.style.color = "#fff";
  moreBtn.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
  moreBtn.style.fontSize = "14px";
  moreBtn.style.cursor = "pointer";
  moreBtn.style.transition = "transform .15s ease, background .15s ease";
  moreBtn.onmouseenter = function(){ this.style.transform = "translateY(-1px)"; this.style.background = "rgba(255,255,255,0.08)"; };
  moreBtn.onmouseleave = function(){ this.style.transform = "translateY(0)"; this.style.background = "rgba(0,0,0,0.5)"; };
  leftGroup.appendChild(moreBtn);
  var rightGroup = document.createElement("div");
  rightGroup.style.display = "flex";
  rightGroup.style.gap = "10px";
  rightGroup.style.alignItems = "center";
  rightGroup.style.pointerEvents = "auto";
  overlayTop.appendChild(rightGroup);
  var winCount = document.createElement("div");
  winCount.textContent = "Win count: 0";
  winCount.style.color = "#fff";
  winCount.style.fontSize = "12px";
  winCount.style.opacity = "0.85";
  winCount.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
  rightGroup.appendChild(winCount);
  var settingsBtn = document.createElement("button");
  settingsBtn.style.width = "36px";
  settingsBtn.style.height = "36px";
  settingsBtn.style.borderRadius = "10px";
  settingsBtn.style.border = "1px solid rgba(255,255,255,0.15)";
  settingsBtn.style.background = "rgba(0,0,0,0.5)";
  settingsBtn.style.color = "#fff";
  settingsBtn.style.display = "inline-flex";
  settingsBtn.style.alignItems = "center";
  settingsBtn.style.justifyContent = "center";
  settingsBtn.style.cursor = "pointer";
  settingsBtn.style.transition = "transform .15s ease, background .15s ease";
  settingsBtn.onmouseenter = function(){ this.style.transform = "translateY(-1px)"; this.style.background = "rgba(255,255,255,0.08)"; };
  settingsBtn.onmouseleave = function(){ this.style.transform = "translateY(0)"; this.style.background = "rgba(0,0,0,0.5)"; };
  settingsBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.1V3a2 2 0 1 1 4 0v.09c0 .63.37 1.21.94 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.14-.33 1.82v.09c.31.57.89.94 1.51.94H21a2 2 0 1 1 0 4h-.09c-.63 0-1.21.37-1.51.94z"></path></svg>';
  rightGroup.appendChild(settingsBtn);
  var overlayBottom = document.createElement("div");
  overlayBottom.style.position = "absolute";
  overlayBottom.style.right = "12px";
  overlayBottom.style.bottom = "12px";
  overlayBottom.style.display = "flex";
  overlayBottom.style.gap = "8px";
  overlayBottom.style.pointerEvents = "auto";
  wrap.appendChild(overlayBottom);
  var fsBtn = document.createElement("button");
  fsBtn.setAttribute("aria-label", "Fullscreen");
  fsBtn.style.width = "40px";
  fsBtn.style.height = "40px";
  fsBtn.style.borderRadius = "12px";
  fsBtn.style.border = "1px solid rgba(255,255,255,0.15)";
  fsBtn.style.background = "rgba(0,0,0,0.55)";
  fsBtn.style.color = "#fff";
  fsBtn.style.display = "inline-flex";
  fsBtn.style.alignItems = "center";
  fsBtn.style.justifyContent = "center";
  fsBtn.style.cursor = "pointer";
  fsBtn.style.transition = "transform .15s ease, background .15s ease";
  fsBtn.onmouseenter = function(){ this.style.transform = "translateY(-1px)"; this.style.background = "rgba(255,255,255,0.08)"; };
  fsBtn.onmouseleave = function(){ this.style.transform = "translateY(0)"; this.style.background = "rgba(0,0,0,0.55)"; };
  fsBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4"/><path d="M15 3h4a2 2 0 0 1 2 2v4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M15 21h4a2 2 0 0 0 2-2v-4"/></svg>';
  fsBtn.onclick = function(){ if(document.fullscreenElement){ document.exitFullscreen && document.exitFullscreen(); } else { wrap.requestFullscreen && wrap.requestFullscreen(); } };
  overlayBottom.appendChild(fsBtn);
  var contentProbe = function(){
    var el = root.querySelector && (root.querySelector("iframe") || root.querySelector("canvas") || root.querySelector("video") || root.querySelector("#gameContainer") || root.querySelector("#c2canvasdiv"));
    return el || root;
  };
  var naturalRatio = function(){
    var el = contentProbe();
    if(el && el.tagName){
      if(el.tagName.toLowerCase()==="canvas"){ var aw = parseInt(el.getAttribute("width"))||el.clientWidth; var ah = parseInt(el.getAttribute("height"))||el.clientHeight; if(aw>0&&ah>0) return aw/ah; }
      if(el.tagName.toLowerCase()==="iframe"){ var iw = el.clientWidth||el.offsetWidth; var ih = el.clientHeight||el.offsetHeight; if(iw>0&&ih>0) return iw/ih; }
      if(el.tagName.toLowerCase()==="video"){ if(el.videoWidth>0&&el.videoHeight>0) return el.videoWidth/el.videoHeight; }
    }
    var sw = root.scrollWidth||root.clientWidth||0; var sh = root.scrollHeight||root.clientHeight||0; if(sw>0&&sh>0) return sw/sh; return 16/9;
  };
  var rafId = 0;
  var fit = function(){
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(function(){
      if(document.fullscreenElement===wrap){ wrap.style.width = "100vw"; wrap.style.height = "100vh"; } else { wrap.style.height = "auto"; wrap.style.width = "50%"; }
      var w = wrap.clientWidth; var h = document.fullscreenElement===wrap ? wrap.clientHeight : wrap.clientHeight; var ratio = naturalRatio(); var targetH = Math.round(w/ratio);
      if(document.fullscreenElement!==wrap){ wrap.style.height = targetH + "px"; h = targetH; }
      var sw = root.scrollWidth||root.clientWidth||w; var sh = root.scrollHeight||root.clientHeight||h; var scale = Math.min(w/sw, h/sh);
      contentFrame.style.transform = "translate(-50%, -50%) scale("+scale+")";
      contentFrame.style.width = sw+"px"; contentFrame.style.height = sh+"px";
    });
  };
  fit();
  window.addEventListener("resize", fit);
  document.addEventListener("fullscreenchange", fit);
  try{ var mo = new MutationObserver(function(){ fit(); }); mo.observe(root,{childList:true,subtree:true,attributes:true}); }catch(e){}
});
