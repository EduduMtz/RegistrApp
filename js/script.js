document.addEventListener("DOMContentLoaded", () => {
    const downloadSection = document.getElementById("download-section");
    const infoimage = document.getElementById("info-app");
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // Mostrar botón para móviles
        downloadSection.innerHTML = `
            <button onclick="window.location.href='https://github.com/EduduMtz/examen/releases/download/apk.RegistrApp/app-debug.apk'">Descargar APK</button>
        `;
    } else {
        // Generar QR para escritorio
        const qrDiv = document.createElement('div');
        qrDiv.style.display = "flex";
        qrDiv.style.flexDirection = "column";
        qrDiv.style.alignItems = "center";
        qrDiv.style.textAlign = "center";
        downloadSection.appendChild(qrDiv);

        // Generar el código QR dinámicamente
        new QRCode(qrDiv, {
            text: 'https://github.com/EduduMtz/examen/releases/download/apk.RegistrApp/app-debug.apk',
            width: 200,
            height: 200,
        });

        // Mensaje para escanear el QR
        const qrText = document.createElement('p');
        qrText.textContent = "Escanea este código QR para descargar la app";
        downloadSection.appendChild(qrText);
    }
});
