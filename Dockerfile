FROM --platform=linux/amd64 nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/hieu-tran-dental-lab-fe/browser /usr/share/nginx/html
EXPOSE 80