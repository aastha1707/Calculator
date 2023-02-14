package com.yash.calculator.controller;

import javax.script.ScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.yash.calculator.Services.StandardCalculatorService;

@RestController
@CrossOrigin
public class StandardCalculatorController {
	@Autowired
	private StandardCalculatorService standardCalculatorService;

	@PostMapping("/evaluate")
	public String Evaluate(@RequestBody String answer) throws ScriptException
	{
		System.out.println(answer);
		return standardCalculatorService.getAnswer(answer);
		}
}