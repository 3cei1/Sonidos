function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oY9h3yP6J/ model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults); 
}

function gotResults(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
        ramdom_number_r = Math.floor(Math.random() * 255) + 1;
        ramdom_number_g = Math.floor(Math.random() * 255) + 1;
        ramdom_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = "Escucho:" + Result[0].label
        document.getElementById("result_confidence").innerHTML = "Precision" + (Result[0].confidence * 100)
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1'); 
        img1 = document.getElementById('alien2'); 
        img2 = document.getElementById('alien3'); 
        img3 = document.getElementById('alien4');

        if (results[0].label == "aplausos") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
          } else if (results[0].label == "campana") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
          } else if (results[0].label == "chasquidos") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
          }else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }

    }
}