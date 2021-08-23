
jQuery(function(){"use strict";var e,a,t,s,o,n,l=$(window),i=$(document),r=$("body"),c=$(".nk-navbar"),d=$(".toggle"),f=$(".nk-navbar-menu"),v="has-fixed",h="navbar-overlay",u="menu-open",g="mobile-menu";function m(e,a){$(window).scrollTop()>a.top?e.hasClass(v)||e.addClass(v):e.hasClass(v)&&e.removeClass(v)}function p(){l.width()<992?f.delay(500).addClass(g):(f.delay(500).removeClass(g),f.removeClass(u))}!function(){var e=$(".is-sticky");if(0<e.length){var a=e.offset();m(e,a),$(window).on("scroll",function(){m(e,a)})}}(),$('a.scrollto[href*="#"]:not([href="#"])').on("click",function(){var e=c.hasClass(v)?c.innerHeight()-2:c.innerHeight()-32;if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=this.hash,t=!!this.hash.slice(1)&&$("[name="+this.hash.slice(1)+"]"),s=a.length?$(a):t;if(s.length)return d.removeClass("active"),f.removeClass(u),$("."+h).remove(),r.removeClass("noscroll"),$("html, body").delay(150).animate({scrollTop:s.offset().top-e},1e3),!1}}),e=f.attr("id"),r.scrollspy({target:"#"+e,offset:c.innerHeight()}),0<d.length&&d.on("click",function(e){var a=$(this),t=a.data("menu-toggle");a.toggleClass("active"),$("#"+t).toggleClass(u),$("#"+t).after("<div class="+h+"></div>"),f.hasClass(u)||$("."+h).remove(),r.toggleClass("noscroll"),e.preventDefault()}),i.on("click","body",function(e){!d.is(e.target)&&0===d.has(e.target).length&&!f.is(e.target)&&0===f.has(e.target).length&&l.width()<992&&(d.removeClass("active"),f.removeClass(u),$("."+h).remove(),r.removeClass("noscroll"))}),p(),l.on("resize",function(){p()}),a=$(".toggle-offcanvas"),t=$(".nk-offcanvas"),0<a.length&&a.on("click",function(e){var a=$(this),t=a.data("offcanvas-toggle");a.toggleClass("active"),$("#"+t).toggleClass("offcanvas-shown"),$("#"+t).after('<div class="offcanvas-overlay"></div>'),$("#"+t).hasClass("offcanvas-shown")||$(".offcanvas-overlay").remove(),r.toggleClass("noscroll"),e.preventDefault()}),i.on("click","body",function(e){a.is(e.target)||0!==a.has(e.target).length||t.is(e.target)||0!==t.has(e.target).length||(a.removeClass("active"),t.removeClass("offcanvas-shown"),$(".offcanvas-overlay").remove(),r.removeClass("noscroll"))}),0<(s=$(".nk-menu-toggle")).length&&s.on("click",function(e){var a=$(this).parent();l.width()<992&&(a.children(".nk-menu-dropdown").slideToggle(400),a.siblings().children(".nk-menu-dropdown").slideUp(400),a.toggleClass("nk-menu-opened"),a.siblings().removeClass("nk-menu-opened")),e.preventDefault()}),function(){var e=$(".nk-form-submit");if(!$().validate&&!$().ajaxSubmit)return console.log("jQuery Form and Form Validate not Defined.");0<e.length&&e.each(function(){var e=$(this),s=e.find(".form-results");e.validate({ignore:[],invalidHandler:function(){s.slideUp(400)},submitHandler:function(t){s.slideUp(400),$(t).ajaxSubmit({target:s,dataType:"json",success:function(e){var a="error"===e.result?"alert-danger":"alert-success";s.removeClass("alert-danger alert-success").addClass("alert "+a).html(e.message).slideDown(400),"error"!==e.result&&$(t).clearForm().find("input").removeClass("input-focused")}})}}),e.find(".select").on("change",function(){$(this).valid()})})}(),0<(o=$(".video-popup")).length&&o.each(function(){$(this).magnificPopup({type:"iframe",removalDelay:160,preloader:!0,fixedContentPos:!1,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}}})}),0<(n=$("[data-covid]")).length&&n.each(function(){var l=$(this),e=l.data("covid"),i=!!l.data("covid-update")&&$("#"+l.data("covid-update"));e&&$.ajax({url:"stats/livedata.php",data:{code:e},headers:{"Access-Control-Allow-Origin":"*"},success:function(e){if("success"==e.status){var a=e.response;if(a){var t=l.find(".covid-stats-cases"),s=l.find(".covid-stats-death"),o=l.find(".covid-stats-recovered"),n=l.find(".covid-update-time");a.cases&&t.text(Nio.addComma(a.cases)),a.death&&s.text(Nio.addComma(a.death)),a.recovered&&o.text(Nio.addComma(a.recovered)),a.update&&(0<n.length?n.text(a.update):i&&0<i.length&&i.text(a.update)),l.find(".count").rCounter({duration:30})}}},error:function(){console.log("Unable to load data.")}})})}());



async function covid(){
    const data = await fetch ("https://www.hpb.health.gov.lk/api/get-current-statistical")
    const response = await data.json()
    const realData = response.data
    const localCases = realData["local_total_cases"]
    const localDeaths = realData["local_deaths"]
    const localRecovered = realData["local_recovered"]

    document.getElementById("localcase").innerHTML = localCases
    document.getElementById("localdeath").innerHTML = localDeaths
    document.getElementById("recovered").innerHTML = localRecovered


}
function realtime(){
    covid()
    const date = new Date()
    const realHour  = date.getHours()
    const realMinute = date.getMinutes()



    if(realHour>12){
        const adjustedHour = realHour-12
       document.getElementById("realtime").innerHTML =  `Last updated: ${adjustedHour}:${realMinute} P.M`
        console.log(`${adjustedHour}:${realMinute} P.M`)
    }else{
        document.getElementById("realtime").innerHTML = `Last updated: ${realHour}:${realMinute} A.M`
    }


}
setTimeout(1000*300,realtime())


const about = document.querySelector('.about')
const buttons = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')


about.addEventListener('click', function(e){
    const id = e.target.dataset.id
    if(id){
        // remove activ class from the rest
        buttons.forEach(function(button){
            button.classList.remove('active')
            e.target.classList.add('active')
        })
        // Hide Content Article
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const elementshow = document.getElementById(id)
        elementshow.classList.add('active')

    }

})

const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()