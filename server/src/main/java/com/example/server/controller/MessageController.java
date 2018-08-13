package com.example.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.Message;

import reactor.core.publisher.Mono;

@RequestMapping("/api")
@RestController
public class MessageController {

	@GetMapping("/message")
	public Mono<Message> helloWorld() {
		return Mono.just(new Message("Hello World!"));
	}
}
