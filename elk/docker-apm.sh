docker run -d \
  -p 8200:8200 \
  --name=apm-server \
  --user=apm-server \
  --volume="$(pwd)/apm-server.docker.yml:/usr/share/apm-server/apm-server.yml:ro" \
  docker.elastic.co/apm/apm-server:7.15.2 \
  --strict.perms=false -e \
  -E output.elasticsearch.hosts=["localhost:9200"]