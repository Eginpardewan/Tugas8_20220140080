document.getElementById("aboutLink").addEventListener("click", function() {
    alert("Ini adalah website showroom kami dalam melayani customer secara online dalam melihat stock yang tersedia pada showroom kami")
});

document.getElementById('clickButton').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images
    for (var i = 1; i <= 5; i++) {
        var img = document.createElement('img');
        img.src = 'https://tse3.mm.bing.net/th?id=OIP.FffNgtTN4PvcZycJV4aj2AHaEB&pid=Api&P=0&h=180' + i + '.jpg'; // Change the image source accordingly
        img.alt = 'https://1.bp.blogspot.com/-wUgO_2VRq-c/XQpYUG1KFhI/AAAAAAAAED0/CJMrmgtO4esInq2i0IjF1SlkflQt2-GZwCLcBGAs/s1600/mobil.png' + i;
        img.classList.add('img-fluid', 'm-2'); // Add Bootstrap classes for styling
        imageContainer.appendChild(img);
    }
});