
document.getElementById("btn1").onclick = function(){
 document.getElementById("paragraph").innerHTML ="I am a person who is positive about every aspect of life.There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like totalk, I like to listen. I like to see the sunrise in the morning, Ilike to see the moonlight at night; I like to feel the music flowingon my face, I like to smell the wind coming from the ocean. I like tolook at the clouds in the sky with a blank mind, I like to do thoughtexperiment when I cannot sleep in the middle of the night. I likeflowers in spring, rain in summer, leaves in autumn, and snow inwinter. I like to sleep early, I like to get up late; I like to bealone, I like to be surrounded by people. I like country’s peace, Ilike metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh."
 document.getElementById("btn1").style.display ='none';
};
 
const imageBtnEl = document.getElementById("image-btn");
const myImageEl = document.getElementById("myImage");
const myImage2El = document.getElementById("myImage2");
const myImage3El = document.getElementById("myImage3");

imageBtnEl.onclick = function(){
                    myImageEl.style.display = 'block';
                    myImage2El.style.display = 'block';
                    myImage3El.style.display = 'block';
                    document.getElementById("tag").style.display = 'none';
                    imageBtnEl.style.display = 'none';
}