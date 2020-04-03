FROM docker.io/roderm/go-protoc:latest as builder

WORKDIR /hackathon/
# Get Go Files
COPY proto ./proto
COPY go ./go
# build protoc
RUN find ./proto/ -type f -name *.proto -exec \
    protoc \
    --proto_path=${GOPATH}/src:. \
    --go_out=$(PWD)/go/ \
    {} \;
# go mod
WORKDIR /hackathon/go
RUN go mod tidy
RUN go mod download

# build binary
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /data/hackathon -ldflags '-w -s' cmd/main.go

FROM scratch as backend
COPY --from=build /data/hackathon /app/backend
CMD [ "/app/backend" ]