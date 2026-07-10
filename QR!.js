let QRwindow=window.open(",",'width=600,height=700');
function generateQR() {
    
            const nameValue = document.getElementById('username').value.trim();
            const Parentname = document.getElementById('fname').value.trim();
            const PhoneNumber = document.getElementById('phn').value.trim();

            if (!nameValue || !Parentname||!PhoneNumber) {
                alert("Please Fill All Fields!");
                return;
            }

            
            const data= `Name:${nameValue.toUpperCase()}\r\nParent Name:${Parentname}\r\nPHN:${PhoneNumber}`;

            document.getElementById('qrcode').innerHTML = "";
            
            new QRCode(document.getElementById("qrcode"), {
                text: data,
                width: 260, 
                height: 260,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
            
            document.getElementById('qrcode-box').style.display = "inline-block";
        }