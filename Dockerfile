# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM oven/bun:1 AS build
WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Install dependencies (dev deps are required to build)
COPY package.json bun.lock* bunfig.toml* ./
RUN bun install --frozen-lockfile || bun install

# Copy source and build
COPY . .
RUN bun run build

# ---------- Runtime stage ----------
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Nitro node-server output is self-contained (server + client assets)
COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
