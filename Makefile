
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