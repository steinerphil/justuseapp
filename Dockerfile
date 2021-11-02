FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Philipp Steiner

ADD backend/target/justuseapp.jar justuseapp.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URL  -jar /justuseapp.jar" ]