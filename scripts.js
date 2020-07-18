$( function () {

    function fillQuotes() {

        function addResponse(x) {

            $("#quotes div.loader").remove();

            for (let i = 0; i < x.length; i++) {


                let start = ('<div class="carousel-item' + ((i == 0)? ' active' : ''));

                let part1 = '"><div class="container-fluid"><div class="row justify-content-center align-items-center pb-5 pl-1 pr-1"><div class="col-sm-1"></div><div class="col-auto"><img class="rounded-circle circle-thumb" src="'
                let image = x[i].pic_url;
                let part2 = '" alt="First slide"></div><div class="col-sm-8"><p class="mt-4 ml-1 mr-1">'
                let text = x[i].text;
                let part3 = '</p><p class="font-weight-bold">'
                let name = x[i].name;
                let part4 = '</p><p class="font-italic">'
                let title = x[i].title;
                let part5 = '</p></div></div></div></div>'

                $("#quotes").append(start+part1+image+part2+text+part3+name+part4+title+part5);

            }
        }

        $("#quotes").append('<div class="loader"></div>');
        $.ajax(
            {
                url: "https://smileschool-api.hbtn.info/quotes",
                data: {
                    "origin":"*",
                },
                crossDomain: true,
                success: addResponse,
            }
        );
    }

    function fillTutorials() {

        function addResponse(x) {

            $("#tutorials div.loader").remove();

            for (let i = 0; i < x.length; i++) {


                let stars = [
                    '<img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/>'
                ]



                let start = '<div class="col-sm m-2"><div class="video-card card text-left"><img class="card-img-top" src="'
                let image = x[i].thumb_url
                let part1 = '" alt="Card image"><div class="card-body text-black"><h3 class="card-title font-weight-bold text-black">'
                let title = x[i].title
                let part2 = '</h3><p class="card-text text-secondary">'
                let text = x[i]["sub-title"]
                let part3 = '</p><div class="d-flex justify-content-start"><img class="circle-thumb-small rounded-circle" src="'
                let profile = x[i].author_pic_url
                let part4 = '"/><p class="lavender m-3">'
                let author = x[i].author
                let part5 = '</p></div><div class="d-flex justify-content-space-between"><div class="d-flex justify-content-space-between mr-auto">'
                let star_bar = stars[x[i].star]
                let part6 = '</div><div><p class="lavender text-right">'
                let time = x[i].duration
                let part7 = '</p></div></div></div></div></div>'


                $("#tutorials").append(start+image+part1+title+part2+text+part3+profile+part4+author+part5+star_bar+part6+time+part7);

            }
        }

        $("#tutorials").append('<div class="loader"></div>');
        $.ajax(
            {
                url: "https://smileschool-api.hbtn.info/popular-tutorials",
                data: {
                    "origin":"*",
                },
                crossDomain: true,
                success: addResponse,
            }
        );


    }



function fillLatestVideos() {

        function addResponse(x) {

            $("#latestvideos div.loader").remove();

            for (let i = 0; i < x.length; i++) {


                let stars = [
                    '<img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/>'
                ]



                let start = '<div class="col-sm m-2"><div class="video-card card text-left"><img class="card-img-top" src="'
                let image = x[i].thumb_url
                let part1 = '" alt="Card image"><div class="card-body text-black"><h3 class="card-title font-weight-bold text-black">'
                let title = x[i].title
                let part2 = '</h3><p class="card-text text-secondary">'
                let text = x[i]["sub-title"]
                let part3 = '</p><div class="d-flex justify-content-start"><img class="circle-thumb-small rounded-circle" src="'
                let profile = x[i].author_pic_url
                let part4 = '"/><p class="lavender m-3">'
                let author = x[i].author
                let part5 = '</p></div><div class="d-flex justify-content-space-between"><div class="d-flex justify-content-space-between mr-auto">'
                let star_bar = stars[x[i].star]
                let part6 = '</div><div><p class="lavender text-right">'
                let time = x[i].duration
                let part7 = '</p></div></div></div></div></div>'


                $("#latestvideos").append(start+image+part1+title+part2+text+part3+profile+part4+author+part5+star_bar+part6+time+part7);

            }
        }

        $("#latestvideos").append('<div class="loader"></div>');
        $.ajax(
            {
                url: "https://smileschool-api.hbtn.info/latest-videos",
                data: {
                    "origin":"*",
                },
                crossDomain: true,
                success: addResponse,
            }
        );
}

function convertString(str) {
    switch(str) {
        case "Most recent":
            return "most_recent"
        case "most_recent":
            return "Most recent"

        case "Most popular":
            return "most_popular"
        case "most_popular":
            return "Most popular"

        case "Most viewed":
            return "most_viewed"
        case "most_viewed":
            return "Most viewed"

        case "All":
            return "all"
        case "all":
            return "All"

        case "Novice":
            return "novice"
        case "novice":
            return "Novice"

        case "Intermediate":
            return "intermediate"
        case "intermediate":
            return "Intermediate"

        case "Expert":
            return "expert"
        case "expert":
            return "Expert"

        default:
            return ''
    }
}


function changedField() {
    let q = $("#searchfield").val()
    let topic = $("#topicfield option:selected").val()
    let sort = $("#sortbyfield option:selected").val()
    fillSearchResults(q, convertString(topic), convertString(sort));
}



function fillSearchResults(q, topic, sort) {

        function addResponse(resp) {

            let x = resp.courses;

            $("#searchresults div.loader").remove();
            $("#searchresultsnumber").text(x.length+" results found")

            let opStart = "<option>"
            let selStart = '<option selected="selected">'
            let opEnd = "</option>"

            $("#topicfield").empty()
            for (let j = 0; j < resp.topics.length; j++) {
                if (resp.topic == resp.topics[j]) {
                  $("#topicfield").append(selStart+convertString(resp.topics[j])+opEnd)
                } else {
                  $("#topicfield").append(opStart+convertString(resp.topics[j])+opEnd)
                }
            }

            $("#sortbyfield").empty()
            for (let k = 0; k < resp.sorts.length; k++) {
                if (resp.sort == resp.sorts[k]) {
                    $("#sortbyfield").append(selStart+convertString(resp.sorts[k])+opEnd)
                } else {
                    $("#sortbyfield").append(opStart+convertString(resp.sorts[k])+opEnd)
                }
            }


            for (let i = 0; i < x.length; i++) {


                let stars = [
                    '<img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_off.png"/>',
                    '<img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/><img class="star m-1" src="images/star_on.png"/>'
                ]



                let start = '<div class="col-sm m-2"><div class="video-card card text-left"><img class="card-img-top" src="'
                let image = x[i].thumb_url
                let part1 = '" alt="Card image"><div class="card-body text-black"><h3 class="card-title font-weight-bold text-black">'
                let title = x[i].title
                let part2 = '</h3><p class="card-text text-secondary">'
                let text = x[i]["sub-title"]
                let part3 = '</p><div class="d-flex justify-content-start"><img class="circle-thumb-small rounded-circle" src="'
                let profile = x[i].author_pic_url
                let part4 = '"/><p class="lavender m-3">'
                let author = x[i].author
                let part5 = '</p></div><div class="d-flex justify-content-space-between"><div class="d-flex justify-content-space-between mr-auto">'
                let star_bar = stars[x[i].star]
                let part6 = '</div><div><p class="lavender text-right">'
                let time = x[i].duration
                let part7 = '</p></div></div></div></div></div>'


                $("#searchresults").append(start+image+part1+title+part2+text+part3+profile+part4+author+part5+star_bar+part6+time+part7);

            }
        }

        $("#searchresults").empty()
        $("#searchresults").append('<div class="loader"></div>');
        $.ajax(
            {
                url: "https://smileschool-api.hbtn.info/courses",
                data: {
                    "q":q,
                    "topic":topic,
                    "sort":sort,
                    "origin":"*",
                },
                crossDomain: true,
                success: addResponse,
            }
        );
}




// Main logic below

    if ($("#quotes").length > 0) {
        fillQuotes();
    }

    if($("#tutorials").length > 0) {
        fillTutorials();
    }

    if($("#latestvideos").length > 0) {
        fillLatestVideos();
    }

    if($("#searchresults").length > 0) {
        $("#searchfield").change(changedField)
        $("#topicfield").change(changedField)
        $("#sortbyfield").change(changedField)
        fillSearchResults("", "all", "most_popular");
    }


});