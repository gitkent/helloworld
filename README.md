# helloworld
[![Build Status](https://travis-ci.com/gitkent/helloworld.svg?branch=master)](https://travis-ci.com/gitkent/helloworld)
## Start up
### Docker way
1. install Docker on your OS flavor
2. Pull docker image 
  ```
  docker pull kentio/helloworld:latest
  ```
3. Run docker image
  ```
  docker run -d -p 3000:3000 kentio/helloworld
  ```
4. On your browser, go to:
  ```
  http://localhost:3000/
  http://localhost:3000/status
  ```

### From source
1. Clone the source
  ``` 
  git clone https://github.com/gitkent/helloworld.git
  cd helloworld
  ```
2. Install dependencies
  ```
  npm install
  ```
3. Start the app
  ```
  node app
  ```
4. On your browser, go to:
  ```
  http://localhost:3000/
  http://localhost:3000/status
  ```

## Limitations and Risks
- exposed API is not https
- authentication not setup for API endpoints
- testing too high level. e.g. a good test should expect the content of API respond contains "Hello World!
- testing should also coversusing  different version of node rather than just using `stable`
