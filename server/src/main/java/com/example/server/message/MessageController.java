package com.example.server.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RequestMapping("/api")
@RestController
public class MessageController {
	
	@Autowired
	private MessageService messageService;

	@GetMapping("/message")
	public Mono<Message> getMessage() {
		return messageService.getMessage();
	}
}
