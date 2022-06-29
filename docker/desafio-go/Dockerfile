FROM golang:alpine3.16 as builder

COPY main.go ./

RUN GO111MODULE=off go build -o /go/bin/app

FROM scratch

COPY --from=builder /go/bin/app /go/bin/

CMD ["/go/bin/app"]
