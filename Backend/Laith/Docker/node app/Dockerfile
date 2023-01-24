FROM node:alpine

WORKDIR /usr/app

# COPY . . # Copy all files from current directory to /usr/app

COPY package.json . 
# Copy package.json to /usr/app
COPY index.js .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# The CMD instruction is used to specify the command that will be run when the container starts, while the RUN instruction is used to execute commands during the image build process. The CMD instruction is used to set the default command that will be run when the container is started, while RUN is used to execute commands as part of the image build process. The CMD instruction is executed only when you run the container, while RUN is executed every time you build the image.
# to build the image, run the following command in the directory where the Dockerfile is located:
# docker build -t <image-name> . # dot represent the current directory and where the Dockerfile is located