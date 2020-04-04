FROM roderm/go-protoc:latest as builder

RUN mkdir -p $GOPATH/src
ENV PATH=$PATH:$GOPATH/bin
WORKDIR /hackathon/
# GO-bins
RUN go get github.com/GeertJohan/go.rice/rice
RUN go get -u github.com/golang/protobuf/protoc-gen-go
# Get Go Files
COPY Makefile ./Makefile
COPY proto ./proto
COPY go ./go
# build protoc
RUN make goproto
# RUN find ./proto/ -type f -name *.proto -exec \
#     protoc \
#     --proto_path=${GOPATH}/src:. \
#     --go_out=$(PWD)/go/ \
#     {} \;
# go mod
WORKDIR /hackathon/go
RUN go mod download

# build binary
## now this is a hack => should export to seperate package or use tool to loop
WORKDIR /hackathon/go/cmd/app
RUN rice embed-go

WORKDIR /hackathon/go
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /data/hackathon -ldflags '-w -s' cmd/main.go

FROM scratch as backend
COPY --from=builder /data/hackathon /app/backend
COPY go/config.docker.yaml /app/config.yaml
ENTRYPOINT [ "/app/backend" ]