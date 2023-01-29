FROM node:alpine

WORKDIR /usr/app

# COPY . .
 # Copy all files from current directory to /usr/app
#  to ignore files and directories from being copied to the container, use the .dockerignore file


# COPY package.json . 
# Copy package.json to /usr/app
# COPY index.js .

# to optimize the build process, run the following command:
COPY package.json .
RUN npm install
# this will install the dependencies in the container only if the package.json file is changed i.e. it  is not cached already from the previous build
COPY . .


RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# The CMD instruction is used to specify the command that will be run when the container starts, while the RUN instruction is used to execute commands during the image build process. The CMD instruction is used to set the default command that will be run when the container is started, while RUN is used to execute commands as part of the image build process. The CMD instruction is executed only when you run the container, while RUN is executed every time you build the image.

# to build the image, run the following command in the directory where the Dockerfile is located:
# docker build -t <image-name> . # dot represent the current directory and where the Dockerfile is located
#  to build docker file with different name than Dockerfile , run the following command:
# docker build -f <docker-file-name> -t <image-name> .

# to run the image, run the following command:
# docker run -p 8000:3000 <image-name> # -p is used to map the port 3000 of the container to the port 8000 of the host
# -d is used to run the container in the background
# -it is used to run the container in interactive mode
# -v is used to mount a volume so that the changes made to the files in the container are reflected in the host and the stored data in container is saved in the host
#  -v <host-directory>:<container-directory>
# -v <host-directory>:<container-directory>:ro # ro is used to make the volume read only
# to create volume we can also use
# docker volume create <volume-name>
# bind mounts is different from volumes
# bind mounts is used to mount a directory from the host to the container and share the files between the host and the container
# bind mounts are synced with the host and are not hidden from the host
# while volumes are managed by docker and are not shared with the host its hidden from the host
#  example of bind mount:
#  docker run -p 8000:3000  -v $(pwd):/usr/src/app <image-name> # $(pwd) is used to get the current directory
#  now the files in the container and the host are synced, changes made to the files in the container are reflected in the host and vice versa
# to ignore node_modules directory for bind mounts, run the following command:
# docker run -p 8000:3000  -v $(pwd):/usr/src/app -v /usr/src/app/node_modules <image-name>
# now the container will not have the node_modules directory from the host
# to ignore Dockerfile too for bind mounts, run the following command:
# docker run -p 8000:3000  -v $(pwd):/usr/src/app -v /usr/src/app/node_modules -v /usr/src/app/Dockerfile <image-name>
#  command for both volumes and bind mounts is the same but we can use the --mount flag to specify the type of mount
# example of bind and volume mount using the --mount flag:
# docker run -p 8000:3000 --mount type=bind,source="$(pwd)",target=/usr/src/app <image-name>
# docker run -p 8000:3000 --mount type=volume,source="$(pwd)",target=/usr/src/app <image-name>
# -e is used to set environment variables
# -e <environment-variable-name>=<environment-variable-value>
#  to give a name to the container, use the --name flag
#  --name <container-name>

# to list all the running containers, run the following command:
# docker ps
# to list all the containers, run the following command:
# docker ps -a
# to stop a container, run the following command:
# docker stop <container-id> or <container-name>
# to remove a container, run the following command:
# docker rm <container-id> or <container-name>
# to remove all the containers, run the following command:
# docker rm $(docker ps -a -q) # -q is used to only display the container id and -a is used to display all the containers
# to remove all the images, run the following command:
# docker rmi $(docker images -aq)
# to remove all the stopped containers, run the following command:
# docker rm $(docker ps -a -q)
# to execute a command in a container, run the following command:
# docker exec -it <container-id> <command> # -it is used to run the container in interactive mode # name of the container can also be used instead of the id
# example
# docker exec -it 1c2d3e4f5g6h7i8j9k0l /bin/sh # to run the container in interactive mode and execute the command /bin/sh in the container 
# bin/sh is  the default shell in the container we can also use bash
# example
# docker exec -it 1c2d3e4f5g6h7i8j9k0l bash # to run the container in interactive mode and execute the command bash in the container
# docker exec -it 1c2d3e4f5g6h7i8j9k0l ls # to run the container in interactive mode and execute the command ls in the container
# cp is used to copy files from the host to the container
# docker cp <host-file-path> <container-id>:<container-file-path>
# to copy files from the container to the host, run the following command:
# docker cp <container-id>:<container-file-path> <host-file-path>
# docker inspect <container-id> # to inspect a container
# docker inspect <image-name> # to inspect an image
# docker logs <container-id> # to view the logs of a container
# docker logs -f <container-id> # to view the logs of a container in real time
# docker logs -f --tail 10 <container-id> # to view the last 10 lines of the logs of a container in real time
# docker logs -f --tail 10 --since 10m <container-id> # to view the last 10 lines of the logs of a container in real time from the last 10 minutes
# docker logs -f --tail 10 --since 2019-01-01T00:00:00 <container-id> # to view the last 10 lines of the logs of a container in real time from a specific date and time
# docker logs -f --tail 10 --since 2019-01-01T00:00:00 --until 2019-01-01T00:10:00 <container-id> # to view the last 10 lines of the logs of a container in real time from a specific date and time to another specific date and time
# docker logs -f --tail 10 --since 2019-01-01T00:00:00 --until 2019-01-01T00:10:00 --timestamps <container-id> # to view the last 10 lines of the logs of a container in real time from a specific date and time to another specific date and time with timestamps
# docker logs -f --tail 10 --since 2019-01-01T00:00:00 --until 2019-01-01T00:10:00 --timestamps --details <container-id> # to view the last 10 lines of the logs of a container in real time from a specific date and time to another specific date and time with timestamps and details

# to create a network, run the following command:
# docker network create <network-name>
# networks are used to connect containers to each other and to the host  # networks are isolated from each other and can't communicate with each other unless they are connected to each other
# to list all the networks, run the following command:
# docker network ls
# to inspect a network, run the following command:
# docker network inspect <network-name>
# to connect a container to a network, run the following command:
# docker network connect <network-name> <container-id>
# to disconnect a container from a network, run the following command:
# docker network disconnect <network-name> <container-id>
# to remove a network, run the following command:
# docker network rm <network-name>


#  multiple containers can be created from the same image
#  to create multiple containers from the same image, run the following command:
#  docker run -p 8000:3000 -p 8001:3000 <image-name>

