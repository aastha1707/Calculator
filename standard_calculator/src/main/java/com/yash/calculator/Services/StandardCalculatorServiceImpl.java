package com.yash.calculator.Services;

import javax.script.ScriptException;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;
import org.springframework.stereotype.Service;

@Service
public class StandardCalculatorServiceImpl implements StandardCalculatorService {
	@Override
	public String getAnswer(String expression) throws ScriptException {
		Context cxt= Context.create();
		Value rslt = cxt.eval("js",expression);
		System.out.println(rslt.toString());
		return rslt.toString();
	}
}