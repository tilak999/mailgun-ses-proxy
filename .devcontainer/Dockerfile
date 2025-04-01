FROM node:20

# Install basic development tools
RUN apt update && apt install -y less man-db sudo zsh

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Install additional tools for devcontainer template development
RUN apt update && apt install -y zip
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended 
RUN chsh -s /usr/bin/zsh
RUN npm install -g pnpm@latest