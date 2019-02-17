################################################################################
# This master makefile can build all language implementations.
# The default target of "all" can be switched to whatever you want.
# The target of "docker-all" builds docker images with each language
# implementation.
# Each one can then be run independently as a standalone image to run the game.
#
# The definitions below control the actual behaviour of the build. I recommend
# you leave everything below here well alone, unless you really know what you're
# doing!
#
################################################################################
# COMMAND DEFINITIONS
################################################################################
ifndef BDD
	export BDD=not @leave
else
  export NOTRUN=and not @leave
endif

ifndef VERSION
	VERSION = v1
endif
ifndef TAG
	TAG = v0.1.0
endif

SERVICE = rooms
PORT = 32000
SSL_PORT = 32443
IMAGE = $(SERVICE)-$(VERSION)
CHART = chart/$(SERVICE)
REGISTRY = registry.eu-gb.bluemix.net/billyregistry/
# Set PROD to the TAG value that you want to be stable for production
PROD = v0.1.0

#REPORT_FORMAT = node_modules/cucumber-pretty
REPORT_FORMAT = progress

NODE_TEST_CMD = npm test -- -f $(REPORT_FORMAT)  --tags "($(BDD)) $(NOTRUN)"


################################################################################
# Targets
################################################################################

.PHONY: all
all: clean build test deploy

.PHONY: clean
clean:
	rm -rf ./coverage
	rm -rf ./node_modules

.PHONY: build
build:
	npm install

.PHONY: test
test: export NODE_ENV=testing
test: 
	$(NODE_TEST_CMD)

.PHONY: deploy-local
deploy-local: docker
	helm dependency build $(CHART)
	helm upgrade --wait --install $(SERVICE) $(CHART)

.PHONY: deploy-public
deploy-public: docker
	helm dependency build $(CHART)
	helm upgrade \
		--wait \
		--install $(SERVICE) $(CHART) \
		--set image.repository=$(REGISTRY)$(SERVICE) \
		--set image.tag=$(PROD) \
		--set service.nodePort=$(PORT) \
		--set service.nodePortHttps=$(SSL_PORT)

.PHONY: remove
remove:
	helm delete --purge $(SERVICE)

.PHONY: docker
docker:
	docker build -t $(IMAGE):$(TAG) .

.PHONY: run
run: export NODE_ENV=development
run:
	npm start

.PHONY: run-docker
run-docker:
	docker run --rm -it \
		-p$(PORT):8080 \
		$(IMAGE):$(TAG)