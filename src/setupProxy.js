import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://127.0.0.1:8080",
            changeOrigin: true,
            ws: true,
            pathRewrite: { "^/api" : "" }
        })
    )
}