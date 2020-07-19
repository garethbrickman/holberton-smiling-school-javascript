function fetchTestimonials () {
    let response = $.ajax(
        {
            type: "GET",
            url: "https://smileschool-api.hbtn.info/quotes",
            data: {"origin":"*"},
            crossDomain: true,
            dataType: "json",

            success: function (res, req) {
                payload = res;
                // extract values from JSON payload 
                $.each(payload, function (index, val) {
                    let name = val.name;
                    let pic = val.pic_url;
                    let text = val.text;
                    let title = val.title;

                // remove loader, insert values into carousel items

                $("div.loader").remove();
                
                const div = document.createElement('div');
                div.classList.add('carousel-item-active');
                div.innerHTML = `
                <div class="container-fluid">
                <div class="row justify-content-center align-items-center pb-5 pl-1 pr-1">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-auto">
                        <img class="rounded-circle circle-thumb" src="${pic}" alt="${name} Avatar">
                    </div>
                    <div class="col-sm-8">
                        <p class="mt-4 ml-1 mr-1">${text}</p>
                        <p class="font-weight-bold">${name}</p>
                        <p class="font-italic">${title}</p>
                    </div>
                 </div>
                </div>
                `
            
              document.querySelector('#testimonial-section').appendChild(div);
                })
            }
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    fetchTestimonials();
});