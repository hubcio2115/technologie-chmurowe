FROM rust AS builder
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/usr/local/cargo/registry cargo build --release
CMD ["myapp"]

