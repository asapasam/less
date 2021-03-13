// function myF() {
//     setInterval(() => {
//         let minutes = Math.floor(((1000 * 60 * 1 ))/(1000 * 60));
//         let seconds = Math.floor(((1000 * 00))/1000);
//         if (seconds < 10) seconds = '0' + seconds;
//         document.querySelector('.time').innerHTML = `${minutes} : ${seconds}`;
//     })
// }


buttonRun = document.getElementById('btn');
timerShow = document.getElementById('timer');
buttonRun2 = document.getElementById('btn2');

vin = document.getElementsByClassName('.b-popup');
lose = document.getElementsByClassName('.b-popup1');


buttonRun.addEventListener('click', function () {
    timeMinut = 60
})

timer = setInterval(function () {
    seconds = timeMinut % 60
    if (seconds < 10) seconds = '0' + seconds;
    minutes = timeMinut / 60 % 60
    if (minutes < 10) minutes = '0' + minutes;

    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("It's a pity, but you lost");
        buttonRun2.setAttribute("disabled", "disabled")

    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }

    $(document).ready(function () {

            $('.number-box').sortable({
                connectWith: '#img_explode, #img_explode',
            })


            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            let check = true;

            // debugger

            // $('#check').on('click', function(){
            //     for(let i=0; i<$('.number').length; i++){
            //         if($('.number').eq(i).text() != numbers[i]){
            //             check = false;
            //             break;
            //         }
            //     }
            //     if(check){
            //         alert('You win');
            //     }
            //     else{
            //         alert('You lose');
            //     }
            //     check = true;
            // // })
            //     });



            // $('.number').draggable({
            //     connectWith: ' .num',
            // })

            // const dragstart = function (event) {
            //     event.dataTransfer.setData("text", event.target.id);
            // };

            // const dragover = function (event) {
            //     if(event.target.nodeName.toLowerCase() === "img"){
            //         return true
            //     }
            //     event.preventDefault()
            // };

            // const drop = function (event) {
            //     event.preventDefault();
            //     let imageId = event.dataTransfer.getData("text");
            //     event.target.appendChild(document.getElementById(imageId));
            // };

            // const cells = document.getElementsByClassName("num");
            // Array.from(cells).forEach((element) => {
            //     element.addEventListener('dragover', dragover);
            //     element.addEventListener('drop',drop);
            // });

            // const images = document.getElementsByClassName("number");
            // Array.from(images).forEach((element) => {
            //     element.addEventListener('dragstart', dragstart)
            // });




            $('#check').on('click', function () {
                    $('.message').css("display", "block");

                    $('#no').on('click', function () {
                        $('.message').css("display", "none");
                    })
                    $('#yes').on('click', function () {
                        clearInterval(timer)

                        for (let i = 0; i < $('.number').length; i++) {
                            if ($('.number').eq(i).text() != numbers[i]) {
                                check = false;
                                break;
                            }
                        }
                        if (check) {
                            $('.b-popup').css("display", "block")
                            // alert("Wohoo,well done,you did it")
                            $('.close').on('click', function(event){ 
                                $('.b-popup').css("display", "none")
                            })
                        } else {
                            $('.b-popup1').css("display", "block")
                            // alert("it's a pity but tou lost")
                            $('.close').on('click', function(event){
                                $('.b-popup1').css("display", "none")
                            })
                        }
                        check = true;

                    });


                }

            )
        })

        --timeMinut;
}, 1000)


$('#new').on('click', function () {


    var parent = $("#img_explode");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

    $(document).ready(function () {

        var a = $("#img_explode > div").remove().toArray();
        for (var i = a.length - 1; i >= 1; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var bi = a[i];
            var bj = a[j];
            a[i] = bj;
            a[j] = bi;
        }
        $("#img_explode").append(a);
    });

    let p = $('.number').length;
    console.log(p)
    pic = [Math.floor(Math.random() * p)]
    console.log(pic)


})