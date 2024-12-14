document.addEventListener("DOMContentLoaded", () => {
    const downloadSection = document.getElementById("download-section");
    const infoimage = document.getElementById("info-app");
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // Crear el botón como un enlace con estilos inline
        const button = document.createElement('a');
        button.href = "https://github.com/EduduMtz/examen/releases/download/apk.RegistrApp/app-debug.apk"; // Enlace a tu APK en GitHub
        button.target = "_blank";
        button.textContent = "Descargar APK";

        const paragraph = document.createElement("p");
        paragraph.textContent = "Presiona la imagen para ver su descripción.";

        // Aplicar estilos inline
        button.style.display = "inline-flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
        button.style.border = "2px solid #000";
        button.style.borderRadius = "10px";
        button.style.backgroundColor = "rgba(0, 0, 0, 1)";
        button.style.padding = "10px 20px";
        button.style.color = "rgba(255, 255, 255, 1)";
        button.style.textDecoration = "none";
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";
        button.style.cursor = "pointer";
        button.style.transition = "all 0.3s ease";

        // Aplicar estilos opcionales al párrafo (puedes personalizarlo o manejarlo con CSS)
        paragraph.style.color = "#fff";
        paragraph.style.fontSize = "14px";
        paragraph.style.marginTop = "10px";
        paragraph.style.textAlign = "center";
        
        // Agregar el párrafo al elemento infoimage
        infoimage.appendChild(paragraph);

        // Efectos de hover
        button.onmouseover = () => {
            button.style.backgroundColor = "#004080";
            button.style.transform = "scale(1.05)";
        };
        button.onmouseout = () => {
            button.style.backgroundColor = "rgba(0, 0, 0, 1)";
            button.style.transform = "scale(1)";
        };

        downloadSection.appendChild(button);
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
        qrText.style.color = "#fff";
        qrText.style.fontSize = "16px";
        qrDiv.appendChild(qrText);
    }
});
