package main

import "net/http"

func main() {
	http.HandleFunc("/product", ProductHandle)
	http.ListenAndServe(":8182", nil)
}

func ProductHandle(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Hello World!</h1>"))
}
