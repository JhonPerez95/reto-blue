## Get Started

First, run the development server:

```bash
# First install the dependencies
npm install
# Second generate build of the project
# NOTE: If you want to run the project in production mode, you must first next.config.js comment the line 7
# !! If it is not commented the same, it will work the same but a small error will appear in the console
npm run build
# third run the project
npm run start
# Open the browser in localhost:3000
http://localhost:3000/
```

Option # 2 with docker

```bash
# NOTE: In Docker you must first uncomment line 7 in next.config.js
# First create the image of the project
docker build -t reto-blue .
# Second generate container and run
docker run --name=container-reto1 -p 3000:3000 reto-blue
# third open the browser in localhost:3000
http://localhost:3000/

```
