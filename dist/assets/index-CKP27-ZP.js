(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let l=document.getElementById("cita"),c=document.getElementById("autor");const u=document.getElementById("nuevaCita"),a=[["The only way to do great work is to love what you do.","Steve Jobs"],["Success is not final, failure is not fatal: it is the courage to continue that counts.","Winston Churchill"],["Believe you can and you're halfway there.","Theodore Roosevelt"],["Do what you can, with what you have, where you are.","Theodore Roosevelt"],["It always seems impossible until it’s done.","Nelson Mandela"],["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","Aristotle"],["Opportunities don't happen. You create them.","Chris Grosser"],["Do not go where the path may lead, go instead where there is no path and leave a trail.","Ralph Waldo Emerson"]];function d(){return Math.floor(Math.random()*a.length)+1}u.addEventListener("click",()=>{let o=d();l.textContent=a[o][0],c.textContent=a[o][1]});
