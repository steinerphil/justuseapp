FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Philipp Steiner

ADD backend/target/justuseapp.jar justuseapp.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /justuseapp.jar" ]