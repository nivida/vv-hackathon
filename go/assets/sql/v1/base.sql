CREATE DATABASE IF NOT exists hackathon;

USE hackathon;

CREATE TABLE IF NOT exists "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "firstname" VARCHAR(128),
    "lastname" VARCHAR(128),
    CONSTRAINT pk PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "logins" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID,
    "type" VARCHAR(64) NOT NULL,
    "sub" UUID NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" TEXT,
    "salt" TEXT,
    CONSTRAINT pk PRIMARY KEY (id),
    CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES "users"("id")
);