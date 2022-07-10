import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import Router from "./router"
import { Provider } from "react-redux"
import store from "./store"
import "virtual:windi.css"
import "./index.css"
import "antd/dist/antd.less"
import { Suspense, lazy } from "react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<div>"加载中"</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </Provider>
)
