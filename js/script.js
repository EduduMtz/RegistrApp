document.addEventListener("DOMContentLoaded", () => {
    const downloadSection = document.getElementById("download-section");
    const userAgent = navigator.userAgent.toLowerCase();

    const infoimage = document.getElementById("info-app");

    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // Mostrar botón para móviles
        downloadSection.innerHTML = `
            <button onclick="window.location.href='https://github.com/EduduMtz/examen/releases/download/apk.RegistrApp/app-debug.apk'">Descargar APK</button>
        `;
        // Crear el párrafo
        const paragraph = document.createElement("p");
        paragraph.textContent = "Presiona la imagen para ver su descripción.";
        
        // Aplicar estilos opcionales al párrafo (puedes personalizarlo o manejarlo con CSS)
        paragraph.style.color = "#fff";
        paragraph.style.fontSize = "14px";
        paragraph.style.marginTop = "10px";
        paragraph.style.textAlign = "center";
        
        // Agregar el párrafo al elemento infoimage
        infoimage.appendChild(paragraph);
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
