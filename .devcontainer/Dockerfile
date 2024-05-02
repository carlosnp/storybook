ARG VARIANT=1-20-bullseye
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}
RUN apt-get update
RUN su node -c "npm install -g npm@10.7.0"
RUN su node -c "npm install -g @angular/cli@17.3.6"