//https://teachablemachine.withgoogle.com/models/9x2WskxhH/
Webcam.set({
width:320,
height:300,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("webcam");
Webcam.attach('#webcam')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}