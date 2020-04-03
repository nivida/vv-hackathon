
.PHONY: goproto
goproto:
	# clean proto folder
	rm -rf ./go/proto/*;
	# generate protobufs
	find ./proto/ -type f -name *.proto -exec \
		protoc \
			--proto_path=${GOPATH}/src:. \
			--go_out=$(PWD)/go/ \
		{} \;

.PHONY: jsproto
jsproto:
	# generate protobufs
	find ./proto/ -type f -name *.proto -exec \
		protoc \
			--proto_path=. \
			--js_out=import_style=commonjs:./client/proto-clients \
		{} ';'   \
		-exec \
			protoc \
			--proto_path=. \
			--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/proto-clients \
		{} ';'   \
    ;