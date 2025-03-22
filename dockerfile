FROM nginx:alpine

# Kopiere deine Website-Dateien in das Nginx-Verzeichnis
COPY . /usr/share/nginx/html

# Expose Port 80
EXPOSE 80