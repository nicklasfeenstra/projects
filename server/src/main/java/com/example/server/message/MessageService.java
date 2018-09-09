package com.example.server.message;

import org.springframework.stereotype.Service;

import reactor.core.publisher.Mono;

@Service
public class MessageService {

	public Mono<Message> getMessage() {
		return Mono.just(new Message("Hello World!"));
	}
}
