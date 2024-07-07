import{A as y,S as u,N as p,K as f,M as C,a as _,d as I,b as E}from"./assets/vendor-b2dbef99.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&g(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const x=document.getElementById("hero-contacts"),k=document.createElement("ul"),T=[{name:"IG",url:"https://www.instagram.com/goitclub/"},{name:"FB",url:"https://www.facebook.com/goITclub/"},{name:"YT",url:"https://www.youtube.com/c/GoIT"},{name:"GH",url:"https://github.com/Arhangels1/project-14"}],P=T.map(e=>`<li><a href='${e.url}' target='_blank'>${e.name}</a></li>`).join("");k.insertAdjacentHTML("beforeend",P);x.appendChild(k);const B=document.createElement("p"),m=document.createElement("a");m.href="mailto:lloydjefferson@gmail.com";m.textContent="lloydjefferson@gmail.com";B.appendChild(m);x.appendChild(B);document.addEventListener("DOMContentLoaded",()=>{new y(".about-me__list")});new u(".skills__swiper",{modules:[p,f,C],navigation:{nextEl:".skills__swiper__next"},mousewheel:{sensitivity:1,eventsTarget:".skills__swiper"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2,loop:!0},767:{slidesPerView:3,loop:!0},1439:{slidesPerView:6,loop:!0}},on:{slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,i)=>{t.classList.remove("next-slide-bg")}),this.slides.forEach((t,i)=>{i===e&&t.classList.add("next-slide-bg")})}}});new u(".projects-swiper",{modules:[p,f],navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});new y(".faq-all-questions");const A={modules:[p,f],navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},767:{slidesPerView:2,spaceBetween:16},1439:{slidesPerView:4,spaceBetween:16}}},S=new u(".swiper-reviews",A);S.on("reachBeginning",function(){o.prevBtn.classList.add("reviews-prev-btn-off"),o.nextBtn.classList.remove("reviews-prev-btn-off")});S.on("reachEnd",function(){o.nextBtn.classList.add("reviews-prev-btn-off"),o.prevBtn.classList.remove("reviews-prev-btn-off")});const o={slideWrapper:document.querySelector(".reviews-swiper-wrapper"),prevBtn:document.querySelector(".reviews-prev-btn"),nextBtn:document.querySelector(".reviews-next-btn")};o.prevBtn.classList.add("reviews-prev-btn-off");async function O(){const e=await _.get("https://portfolio-js.b.goit.study/api/reviews",{headers:{accept:"application/json"}});o.slideWrapper.insertAdjacentHTML("afterbegin",H(e.data))}O();function $(e){return`<div class="swiper-slide reviews-swiper-slide">
          <img
            class="reviews-img"
            src="${e.avatar_url}"
            alt="Natalia"
          />
          <div class="reviews-desc">
            <p class="reviews-name">${e.author}</p>
            <p class="reviews-text">${e.review}</p>
          </div>
        </div>`}function H(e){return e.map($).join("")}o.nextBtn.addEventListener("click",()=>{o.prevBtn.classList.remove("reviews-prev-btn-off")});o.prevBtn.addEventListener("click",()=>{o.nextBtn.classList.remove("reviews-prev-btn-off")});document.addEventListener("keydown",e=>{e.preventDefault(),e.code==="ArrowRight"&&o.prevBtn.classList.remove("reviews-prev-btn-off"),e.code==="ArrowLeft"&&o.nextBtn.classList.remove("reviews-prev-btn-off")});const N="https://portfolio-js.b.goit.study/api";async function R(e){try{return await _.post(`${N}/requests`,e)}catch(t){return t}}const q=document.querySelector(".footer__form"),c=document.querySelector('input[name="comment"]'),v=document.querySelector('input[name="email"]'),s=document.querySelector(".footer__form--is-valid"),b=document.querySelector(".loader"),M=document.querySelector(".backdrop"),a=document.querySelector(".modal"),h=33;let w="";v.addEventListener("input",I(D,300));c.addEventListener("input",G);c.addEventListener("blur",K);c.addEventListener("focus",W);q.addEventListener("submit",z);M.addEventListener("click",J);function D(e){U(e),F()}function F(){v.value.length<=0&&(s.textContent="")}function G(e){w=e.target.value}function K(e){e.target.value.length>h&&(e.target.value=e.target.value.substring(0,h)+"...")}function W(e){e.target.value=w}function z(e){e.preventDefault();const t=new FormData(q);b.classList.remove("is-hidden"),R(Object.fromEntries(t)).then(i=>{b.classList.add("is-hidden"),a.innerHTML=L(i.data),d(),E.on(),window.addEventListener("keydown",j)}).catch(i=>{a.innerHTML=L({title:"Error"}),d()}),Y()}function j(e){e.code==="Escape"&&V()}function U(e){e.target.checkValidity()?(s.classList.add("footer__form--valid"),s.classList.remove("footer__form--invalid"),s.textContent="Success"):(s.classList.remove("footer__form--valid"),s.classList.add("footer__form--invalid"),s.textContent="Invalid email, try again")}function d(){M.classList.toggle("is-hidden--modal"),a.classList.toggle("animate__bounceInRight"),a.classList.toggle("backdrop__modal__animation")}function Y(){v.value="",c.value="",s.textContent="",w=""}function J(e){e.currentTarget===e.target&&V()}function V(){d(),E.off(),window.removeEventListener("keydown",j)}function L({title:e,message:t}){return`<div class="backdrop__modal__content">
        <h4>${e}</h4>
        ${t?`<p>${t}</p>`:""}
      </div>`}
//# sourceMappingURL=commonHelpers.js.map
