#!/bin/bash

set -e

echo "Generating protos... "

PROTO_DIR="./src/protos"
PROTOS_OUT_DIR="${PROTO_DIR}/generated"

# Generate JavaScript code
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:"${PROTOS_OUT_DIR}" \
  --grpc_out=grpc_js:"${PROTOS_OUT_DIR}" \
  --plugin=protoc-gen-grpc="$(which grpc_tools_node_protoc_plugin)" \
  -I="${PROTO_DIR}" \
  "${PROTO_DIR}"/*.proto

# Generate TypeScript code (d.ts)
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:"${PROTOS_OUT_DIR}" \
  -I="${PROTO_DIR}" \
  "${PROTO_DIR}"/*.proto

echo "Generating protos... DONE ✅ "
