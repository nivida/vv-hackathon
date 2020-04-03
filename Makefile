
.PHONY: goproto
goproto:
	# clean proto folder
	rm -rf ./go/proto/*
	mkdir -p ./go/proto/
	# generate protobufs
	find ./proto/ -type f -name *.proto -exec \
		protoc \
			--proto_path=. \
			--go_out=plugins=grpc:./go/proto \
		{} \;
	mv go/proto/github.com/nivida/vv-hackathon/go/proto/* go/proto
	rm -rf go/proto/github.com

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
			--grpc-web_out=import_style=commonjs,mode=grpcweb:./client/proto-clients \
		{} ';'   \
    ;
