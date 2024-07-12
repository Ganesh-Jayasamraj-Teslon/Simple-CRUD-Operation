FROM node:20-alpine
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install
CMD ["npm", "run", "serve"]
# EXPOSE 8080