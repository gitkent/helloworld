# helloworld
## Start up
### Docker way
1. install Docker on your OS flavor
2. Pull docker image 
  ```
  docker pull kentio/helloworld:latest
  ```
3. Run docker image
  ```
  docker run -d -p 0.0.0.0:3000:3000 kentio/helloworld
  ```
4. On your browser, go to:
  ```
  http://localhost:3000/
  http://localhost:3000/status
  ```

### From source
1. git clone

## Limitation
- exposed API is not https
- authentication not setup for API endpoints
- not utlising docker image versioning/tagging, such as having `preview` tag of docker image, then test on `preview` tag then publish to `latest`
- testing too high level. e.g. a good test should expect the content of API respond contains "Hello World!
- testing should also coversusing  different version of node rather than just using `stable`
