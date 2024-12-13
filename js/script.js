document.addEventListener("DOMContentLoaded", () => {
    const downloadSection = document.getElementById("download-section");
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // Mostrar botón para móviles
        downloadSection.innerHTML = `
            <a
                class="authorized-reseller-api-btn"
                href="https://github.com/EduduMtz/examen/releases/download/apk.RegistrApp/app-debug.apk"
                target="_blank"
            >
                <svg
                    height="42"
                    width="40"
                    viewBox="0 0 24 24"
                    class="document-download_svg__h-6 document-download_svg__w-6"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <path
                        stroke-width="2px"
                        fill="none"
                        stroke="#FFFFFF"
                        d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    ></path>
                </svg>

                <span class="texts">
                    <span class="text-2">Descargar APK</span>
                    <span class="text-1">Versión 1.0.3</span>
                </span>
            </a>
        `;
    } else {
        // Generar QR para escritorio
        const qrDiv = document.createElement('div');
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
        qrDiv.appendChild(qrText);
    }
});
