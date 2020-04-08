if [ ! "$(docker ps -q -f name=postgres_container)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=postgres_container)" ]; then
        # cleanup
        docker rm postgres_container
    fi
    # run your container
    docker-compose -f ../docker-compose.yml  up -d
fi