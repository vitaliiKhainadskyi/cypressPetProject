docker build -t cypress_test .
docker images | grep none | grep -v second | awk '{ print $3; }' | xargs docker rmi
docker run --network eaapp_localmachine_ea_network --rm -v "$(pwd)"/reports:/cypress/reports cypress_test