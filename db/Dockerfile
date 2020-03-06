FROM mongo
COPY . /db
WORKDIR /db
EXPOSE 80
EXPOSE 443
RUN chmod +x wait-for-it.sh
RUN chmod +x mongo_upload.sh

CMD ./mongo_upload.sh