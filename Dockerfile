FROM ubuntu:14.04

#Instalar Node apt-get

RUN sudo apt-get update \
&& apt-get install -y curl  \
&& curl -sL deb.nodesource.com/setup_10.x | bash - \
&& apt-get install -y nodejs \
&& mkdir app \
&& apt-get remove -y curl \
&& rm -rf /var/lib/apt/lists/*

RUN npm install -g @angular/cli

# Copia el directorio actual en el directorio del contenedor (/app)
COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]

#capa 11Mb
#RUN apt-get install -y curl

#Capa ... 
#RUN curl -sL deb.nodesource.com/setup_10.x | bash -


