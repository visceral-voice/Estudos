package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"time"
)

//Criando multi threads

func main() {
	requestId := make(chan int)

	concurrency := 2
	for c := 1; c <= concurrency; c++ {
		go worker(requestId, c)
	}

	for i := 0; i < 10; i++ {
		requestId <- i //Passando valor para o tipo channel
	}
}

func worker(request chan int, worker int) {
	for r := range request {
		res, err := http.Get("http://localhost:8282/Product")

		if err != nil {
			log.Fatal("Erro...")
		}

		defer res.Body.Close()

		content, _ := ioutil.ReadAll(res.Body)
		fmt.Printf("Worker: %d. RequestId: %d Content: %s ", worker, r, string(content))
		rnd := rand.Intn(5)
		time.Sleep(time.Second * time.Duration(rnd))
	}
}
