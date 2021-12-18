# Split the chat phrases

This is a fork of a coding challenge. The master repository belongs to [Wonderflow](https://github.com/wonderflow-bv/parse-chat-kata).

For details about the original challenge, see [ASSIGNMENT.md](./ASSIGNMENT.md)

Challenge faced by Luciano Taurino ([LvcioT](mailto:luciano@taurino.eu?subject=parse-chat-kata)).

## Environment Specifications and Setup

This project is based on [Deno](https://deno.land/) framework and is written in [TypeScript](https://www.typescriptlang.org/). It's encapsulated inside a Docker container because Deno is not very common (nowadays), so I immagine that a few people have it installed on their machines.

In order to have the environment working, you have to run the container and run a bash instanze inside it.

Run in the shell/terminal, navigate to this project folder and run the following commnands:

    docker-compose up
    docker exec -it deno bash

You'll fine yourself inside the `/app` folder, root for the project inside the container.

## Run App

In order to run the app, inside the container you have to run the command:

    deno run main.ts "message text to be parsed"

At the first run some libraries could be downloaded, so be patient.

The source code is in the `app` folder, whilst the core parser is enclosed in `parser` subfolder.

## Run Test

Parser section of this prog=ject is provided with a full set of test. The whole test set can be run by the command:

    deno test

Inside the file `cases.ts` are listed the use cases provided by the challenge. These data structures are used by test routines. 