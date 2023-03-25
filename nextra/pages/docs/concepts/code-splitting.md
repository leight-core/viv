# Code splitting

## Prolog

The structure of this library may look quite crazy, but there is reason, why it's done in a such way.

The problem was that I've used a lot of code which was client-only or server-only mixed together. Or just a little utility function, which takes some _Node_ specific
code to the client. It was pain.

So here comes the solution.

## Client

Every package related only to client side ends with `-client` suffix. Even there are some funny situations where I've got `client-client` package for client aka customer on client
side aka browser. But even with it, I've followed this concept.

## Server

Same for server-side - everything related to the Node world not usable in browser should go into `-server` package. Some times package names could be crazy long, but keep the concept,
you won't regret it.

## The others

When there are interfaces, usually sharable between packages or just between `-client` and `-server`, it belongs to package name _without_ any suffix. Keep in mind here should **not** be any code other
than just interfaces or pure helpers, because you can end up with cyclic dependencies within `-client`/`-server` and `package` packages.

## Examples

You can see [@leight](https://github.com/leight-core/viv/tree/main/packages/%40leight) packages, but for example:

### @leight/file

Interfaces, type definitions and overall shape of `-client` and `-server` packages; because we're talking about types, it doesn't matter there are mixed client and server stuff.

### @leight/file-client

This package provides React stuff on a client, table for listing files, handles uploading and a lot of other - **client only** stuff. Backend calls are handled via _trpc_ which is **another**
package using the same concept of split code.

### @leight/file-server

Here is generated Source and overall server-only stuff: generated procedures and handling of FileSource (filtering, ordering, ...). Here you are in _Node land_ so you can do whatever you want. Except
including this on client.

## tRPC

This is related, but worth mentioning: because _@leight_ expects you will use monorepo for managing all pieces of your app, this one is quite special.

With you app - **in the monorepo** - you should have two packages for tRPC: one for a client, one for server, both serving as center point of component connection - all other packages can export procedures
which should be connected in the server-side package; also this is the only exception where `client` can include `server` stuff, but this is due nature of tRPC.
