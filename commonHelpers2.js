import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const a=document.querySelector(".form");a.addEventListener("submit",function(l){l.preventDefault();const r=document.querySelector("input[name='delay']"),e=parseInt(r.value),o=document.querySelector("input[name='state']:checked"),s=o?o.value:null;e&&s&&(e===""?i.warning({title:"Warning",message:"Please fill in all fields."}):new Promise((t,n)=>{s==="fulfilled"?setTimeout(()=>t(e),e):s==="rejected"&&setTimeout(()=>n(e),e)}).then(t=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#FFFFFF",titleColor:"#FFFFFF",progressBarColor:"#326101",closeOnClick:!0,timeout:3e3})},t=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",progressBarColor:"#FFBEBE",closeOnClick:!0,timeout:3e3})})),r.value="",o.checked=!1});
//# sourceMappingURL=commonHelpers2.js.map
