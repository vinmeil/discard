# Discard

Discard is a fun, light-hearted project created by a group of friends as a simpler version of Discord with the aim of learning web development and working in a team environment. It's a web application that allows users to communicate with each other in real-time, much like Discord.

## Features

- Real-time chat: Send and receive messages instantly.
- To be added

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Things you will need to install to get the project running on your local machine:
- IDE or Code Editor of your choice
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Running the project


**If you encounter any issues while setting up or running the project, feel free to contact me on Discord @vinmeil.**

1. Clone the github repository onto your local machine if you haven't already (Only need to do 1 time):
```
git clone https://github.com/vinmeil/discard.git
```

2. Open 2 separate instances of your terminal or command prompt and make sure you are in the correct directory. You can do this from within VSCode.

3. Running docker:
- For MacOS and Linux, in your 2 instances of your terminals, run:
```
sudo docker compose up
```
```
sudo docker compose watch
```

**Image for reference:**
![Running docker in terminal](mdassets/dockerterminal.png)

- For Windows, in your 2 instances of your terminals, run:
```
docker compose up
```
```
docker compose watch
```

**NOTE: If you are getting an error regarding permissions, run VSCode as administrator and see if that works.*

4. Wait for docker to finish loading. Once it is done loading, head over to [http://localhost:3000](http://localhost:3000) to see the project.

## License

This project is not licensed and is intended for educational purposes. Please do not use it to create a public product. If you wish to use it for private, educational purposes, please contact the authors.

## Authors
- Vincent Wesley Liem - [vinmeil](https://github.com/vinmeil)
- Daven Tan - [Skooyo](https://github.com/Skooyo)

## Acknowledgements
- [Discord](https://discord.com/) - Serves as an inspiration to our project, including the UI/UX and idea of our project.
