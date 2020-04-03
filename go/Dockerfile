FROM ubuntu:latest AS go_base

ENV URL https://dl.google.com/go/go1.14.1.linux-amd64.tar.gz
RUN apt-get update -y && \
    apt-get install -y \
    curl \
    git

## install go binary
RUN curl -L $URL -o /tmp/golang.tar.gz && \
    tar -C /usr/local -xzf /tmp/golang.tar.gz

ENV GOPATH /golang
ENV PATH $PATH:/usr/local/go/bin

FROM go_base AS protoc

ENV PROTO_VERSION 3.11.4
ENV URL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTO_VERSION}/protobuf-all-${PROTO_VERSION}.tar.gz

RUN apt-get install -y \
    autoconf \
    automake \
    libtool \
    make \
    g++ \
    unzip

RUN curl -L ${URL} -o /tmp/protoc.tar.gz && \
    tar -C /tmp/ -zxvf /tmp/protoc.tar.gz && \
    cd /tmp/protobuf-${PROTO_VERSION} && \
    ./configure && \
    make && \
    make check && \
    make install && \
    ldconfig