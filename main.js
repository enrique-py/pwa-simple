//service worker
if('serviceWorker' in navigator){
    console.log('puedes usar los servicesworker en tu navegador');

    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.log('serviceworker cargadado ok', res))
                           .catch(err => console.log('no se pudo registrar', err));
}else{
    console.log('no puedes');
}

//scroll suavizado
/*
$(document).ready(function()){
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        })
    })
}*/