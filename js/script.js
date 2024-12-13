document.addEventListener("DOMContentLoaded", () => {
    const downloadSection = document.getElementById("download-section");
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // Mostrar botón para móviles
        downloadSection.innerHTML = `
            <button onclick="window.location.href='static/mi-apk.apk'">Descargar APK</button>
        `;
    } else {
        // Generar QR para escritorio
        const qrDiv = document.createElement('div');
        downloadSection.appendChild(qrDiv);

        // Generar el código QR dinámicamente
        new QRCode(qrDiv, {
            text: window.location.origin + "/static/mi-apk.apk",
            width: 200,
            height: 200,
        });

        // Mensaje para escanear el QR
        const qrText = document.createElement('p');
        qrText.textContent = "Escanea este código QR para descargar la app";
        downloadSection.appendChild(qrText);
    }
});