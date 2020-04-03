FROM roderm/go-protoc:latest as builder

RUN mkdir -p $GOPATH/src
ENV PATH=$PATH:$GOPATH/bin
WORKDIR /hackathon/
# Get Go Files
COPY Makefile ./Makefile
COPY proto ./proto
COPY go ./go
# build protoc
RUN go get -u github.com/golang/protobuf/protoc-gen-go
RUN make goproto
# RUN find ./proto/ -type f -name *.proto -exec \
#     protoc \
#     --proto_path=${GOPATH}/src:. \
#     --go_out=$(PWD)/go/ \
#     {} \;
# go mod
WORKDIR /hackathon/go
RUN go mod tidy
RUN go mod download

# build binary
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /data/hackathon -ldflags '-w -s' cmd/main.go

FROM scratch as backend
COPY --from=builder /data/hackathon /app/backend
CMD [ "/app/backend" ]