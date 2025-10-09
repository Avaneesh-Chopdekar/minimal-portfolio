---
title: "Rebuilding the Wheel: Engineering from First Principles"
description: They say reinventing the wheel is a waste of time — but building the wheel yourself teaches you more than any manual ever could. In this post, I walk through my journey of recreating foundational tools like Redis, Git, React, and more, and how it made me a better engineer.
tags: ["coding", "redis", "git", "react", "python", "javascript"]
date: 2025-05-11
---

## Introduction:

I started this journey of recreating technologies to learn more about them.
Quick list of recreated tools: Redis, Git, HTTP server, React clone, Vector DB, etc.
The common format I followed for each project is, I first noted down main features I wanted to recreate. My goal was not to create an exact replica. It was to learn the tech better. So I focused on building Proof of Concept using easier languages like python and javascript compared to c++ and rust.

## Recreating Redis in Node.js

#### What I Built

A simplified version of Redis — an in-memory key-value store — using Node.js. It supports basic commands like `SET`, `GET`, `DEL`, `EXPIRE`, etc, mimicking the Redis CLI experience.

#### How I Built It

- I used TCP sockets with the `net` module in Node.js to handle raw client connections.
- Parsed custom commands in RESP (Redis Serialization Protocol) format.
- Maintained an in-memory object as the core data store.
- Implemented basic expiration logic using `setTimeout`.

#### Features I Added

- String operations:  
  `PING`, `SET`, `GET`, `DEL`, `EXPIRE`, `TTL`, `INCR`, `DECR`, `LPUSH`, `RPUSH`, `LRANGE`, `LPOP`, `RPOP`
- TTL (time-to-live) expiration support
- Implemented persistence (in-memory, snapshot, append-only)
- A command parser that supports pipelining

#### What I Learned

- How TCP servers handle low-level communication
- Why Redis uses RESP instead of plain JSON
- How TTL works under the hood and the challenges with expiring keys
- Why Redis is single-threaded and how it avoids locks

---

### Other Projects

- **Recreating Git in Node.js**

  - **What I built:** Basic CLI with `init`, `add`, `commit`, `log`, `diff`
  - **How I built it:** File system diffing, SHA1 hashing, .git directory
  - **Features:** Staging area, history, diffing
  - **What I learned:** DAGs, content-addressed storage, commit objects

- **React.js Clone in Javascript**

  - **What I built:** Reconciliation, React Hooks
  - **How I built it:** Fiber-like structure, custom hooks
  - **Features:** `useState`, `useEffect`, diffing, re-render
  - **What I learned:** Rendering models, reactivity, component lifecycles

- **HTTP Server in Python**

  - **What I built:** Barebones server supporting routes and headers
  - **How I built it:** Using built-in socket module in python
  - **Features:** Routing, request/response parsing, HTML and JSON response
  - **What I learned:** HTTP protocol internals, status codes, headers

- **Mini Programming Language in Javascript**

  - **What I built:** Tokenizer, parser, interpreter
  - **How I built it:** AST construction, recursive descent parsing
  - **Features:** Variables, math expressions
  - **What I learned:** Lexical analysis, parsing, control flow internals

- **Vector Store (FAISS-lite) in Python**

  - **What I built:** Simple vector indexer with cosine similarity
  - **How I built it:** Using NumPy module in python
  - **Features:** Insert, search, delete, metadata
  - **What I learned:** ANN (Approximate Nearest Neighbors), similarity math, indexing

- **Minimal Backend Framework**

  - **What I built:** FastAPI like Python Framework
  - **How I built it:** Routing system, middleware, response helpers. All this on top of waitress server
  - **Features:** Request/response lifecycle, plug-and-play middleware
  - **What I learned:** How a backend framework works behind the scenes

- **UI Library**

  - **What I built:** A lightweight tailwind css based ui components
  - **How I built it:** Using storybook, react and vite
  - **Features:** Button, Input, Text, and Layout (Box and Stack) components
  - **What I learned:** How design systems are built and documentated using Storybook

### Reflections

**Why Rebuilding Matters**

- You gain intuition that no documentation or tutorial can offer.
- You start to appreciate trade-offs in real-world software (performance vs. simplicity, DX vs. complexity).
- It makes you fearless in diving into the source code of popular tools.
- Bonus: It’s fun. Seriously.

**Closing Thoughts**

- If you're ever stuck in tutorial hell or feel like you're not _really_ learning — try building the tool yourself.
- It won’t be perfect. That’s the point.
- In the end, it’s not about replacing Redis or Git — it’s about replacing your limits with curiosity.
