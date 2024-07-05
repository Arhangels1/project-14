import{S as a,N as c,a as l}from"./assets/vendor-46739956.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p={modules:[c],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},767:{slidesPerView:2,spaceBetween:16},1439:{slidesPerView:4,spaceBetween:16}}};new a(".swiper",p);const d=document.querySelector(".reviews-swiper-wrapper");async function u(){const r=await l.get("https://portfolio-js.b.goit.study/api/reviews",{headers:{accept:"application/json"}});console.log(r.data),d.insertAdjacentHTML("afterbegin",w(r.data))}function f(r){return`<div class="swiper-slide reviews-swiper-slide">
          <img
            class="reviews-img"
            src="${r.avatar_url}"
            alt="Natalia"
          />
          <div class="reviews-desc">
            <p class="reviews-name">${r.author}</p>
            <p class="reviews-text">${r.review}</p>
          </div>
        </div>`}function w(r){return r.map(f).join("")}u();
//# sourceMappingURL=commonHelpers.js.map
