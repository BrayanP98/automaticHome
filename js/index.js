



var pdf_buton=document.getElementById("pdf");
pdf_buton.onclick=function(){
    var logo_url = "img/infograma.jpeg";
    getImgFromUrl(logo_url, function (img) {
        generatePDF(img);
    });
}
 

      function getImgFromUrl(logo_url, callback) {
        var img = new Image();
        img.src = logo_url;
        img.onload = function () {
            callback(img);
        };
    }
    function generatePDF(img){
        
       
        var doc = new jsPDF('p', 'mm', 'a3');
        doc.addImage(img, 'JPEG', 50, 50, 200, 300);
    doc.save('Infograma_AHSolutions_.pdf')}