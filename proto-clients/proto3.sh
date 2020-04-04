
find ../proto/ -type f -name *.proto -exec \
		protoc \
         --proto_path=../ \
         --js_out=import_style=commonjs:./proto \
    {} ';'   \
    -exec \
		protoc \
         --proto_path=../ \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./proto \
    {} ';'   \
