from flask import Flask, send_file, url_for, request
import qrcode
import io

app = Flask(__name__)

# Ruta para descargar la APK
@app.route('/download_apk', methods=['GET'])
def download_apk():
    apk_path = 'static/mi-apk.apk'  # Ruta local al archivo APK
    return send_file(apk_path, as_attachment=True)

# Ruta para generar el QR dinámico
@app.route('/generate_qr', methods=['GET'])
def generate_qr():
    # URL de descarga del APK (la misma ruta que la función anterior)
    apk_url = request.url_root + 'download_apk'
    
    # Generar el código QR
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(apk_url)
    qr.make(fit=True)
    
    # Convertir el QR a una imagen en memoria
    img = qr.make_image(fill_color="black", back_color="white")
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)
    
    return send_file(buffer, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
