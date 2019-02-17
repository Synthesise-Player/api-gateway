# starter-service [![Build Status](https://travis.ibm.com/hursley-assistant/api-server.svg?token=XTD7QzLFN4Yif5JNiVxf&branch=master)](https://travis.ibm.com/hursley-assistant/api-server)
A starter service for running an rest microservice on cloud.

## Building and Testing

To install dependencies, run:

```
npm install
```

To build, test and deploy the microservice, run:
```
make
```

To just test it, run:
```
make test
```

This will execute all the tests you've defined as `feature` files in `test/features`.

If you add the tag `@leave` to any feature or scenario within that feature, it will not be run as a test.

## Building the Docker image
To build the microservice as a docker image, run:
```
make docker
```
This will build the target image and execute the tests within that image to verify it.

## Running the microservice
To run the microservice locally on your machine, run:
```
make run
```

To run the microservice in docker locally, run:
```
make run-docker
```

To run the microservice in kubernetes, run:
```
make deploy
```
# api-gateway
