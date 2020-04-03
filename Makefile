
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
	# clean proto folder
	rm -rf ./go/proto/*;
	# generate protobufs
	find ./proto/ -type f -name *.proto -exec \
		protoc \
			--proto_path=../proto \
			--js_out=import_style=commonjs:./proto-clients \
		{} ';'   \
		-exec \
			protoc \
			--proto_path=../proto \
			--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./proto-clients \
		{} ';'   \