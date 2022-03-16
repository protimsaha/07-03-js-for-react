
let qrcode = new QRCode(document.getElementById('qrcode'));

function qrCodeGen() {
    let qrData = document.getElementById('qr-code')
    qrData.value = document.getElementById('youtube')
    let qrDataValue = qrData.value;

    qrcode.makeCode(qrDataValue)
}